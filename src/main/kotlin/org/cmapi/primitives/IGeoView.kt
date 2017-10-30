package org.cmapi.primitives

interface IGeoView {

    var camera: IGeoCamera

    var lookAt: IGeoLookAt

    var bounds: IGeoBounds

    var scale: Double
}
