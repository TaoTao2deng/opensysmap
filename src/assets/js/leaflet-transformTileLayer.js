
L.TransformTileLayer = L.TileLayer.extend({
	/**
	 * 在地图缩放期间，新建目标级别时，使用转换后的中心点坐标
	 * 防止缩放动画错位
	 */
	_updateLevels: function () {

		var zoom = this._tileZoom,
			maxZoom = this.options.maxZoom;

		if (zoom === undefined) { return undefined; }

		for (var z in this._levels) {
			if (this._levels[z].el.children.length || z === zoom) {
				this._levels[z].el.style.zIndex = maxZoom - Math.abs(zoom - z);
				this._onUpdateLevel(z);
			} else {
				L.DomUtil.remove(this._levels[z].el);
				this._removeTilesAtZoom(z);
				this._onRemoveLevel(z);
				delete this._levels[z];
			}
		}

		var level = this._levels[zoom],
			map = this._map;

		if (!level) {
			level = this._levels[zoom] = {};

			level.el = L.DomUtil.create('div', 'leaflet-tile-container leaflet-zoom-animated', this._container);
			level.el.style.zIndex = maxZoom;

			level.origin = map.project(map.unproject(map.getPixelOrigin()), zoom).round();
			level.zoom = zoom;

			let nc = this._coordTransform(map.getCenter());
			this._setZoomTransform(level, nc, map.getZoom());

			// force the browser to consider the newly added element for transition
			L.Util.falseFn(level.el.offsetWidth);

			this._onCreateLevel(level);
		}

		this._level = level;

		return level;
	},
	/**
	 * 在计算当前地图所需切片之前，将坐标转为目标坐标
	 * @param {*} center 
	 */
	_update: function (center) {
		if (!this._map) return;
		if (center === undefined) center = this._map.getCenter();
		center = this._coordTransform(center);
		L.TileLayer.prototype._update.apply(this, [center]);
	},
	/**
	 * 在计算切片容器的偏移坐标前，将坐标转为目标坐标
	 * @param {*} center 
	 * @param {*} zoom 
	 */
	_setZoomTransforms: function (center, zoom) {
		center = this._coordTransform(center);
		L.TileLayer.prototype._setZoomTransforms.apply(this, [center, zoom]);
	},
	/**
	 * 坐标转换
	 * @param {*} center 
	 */
	_coordTransform: function (center) {
		if (!this.options.transforms) return center;
		const transform = this.options.transforms[this._map.options.crs.code];
		return transform ? transform(center) : center;
	}
})