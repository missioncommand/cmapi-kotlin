package org.cmapi.primitives.interfaces

interface IGeoView {

    var camera: IGeoCamera

    var lookAt: IGeoLookAt

    var bounds: IGeoBounds

    var scale: Double
}
