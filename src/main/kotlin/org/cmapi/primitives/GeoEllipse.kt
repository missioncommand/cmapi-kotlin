package org.cmapi.primitives

import org.cmapi.primitives.interfaces.IGeoEllipse

open class GeoEllipse : GeoRenderable(), IGeoEllipse
{
    override var semiMajor = 150.0
    override var semiMinor = 75.0
}
