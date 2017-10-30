package org.cmapi.primitives

open class GeoEllipse : GeoRenderable(), IGeoEllipse
{
    override var semiMajor = 150.0
    override var semiMinor = 75.0
}
