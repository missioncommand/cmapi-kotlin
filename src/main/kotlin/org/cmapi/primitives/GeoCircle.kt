package org.cmapi.primitives

import multiplatform.expected.MpDate
import org.cmapi.primitives.interfaces.IGeoBase
import org.cmapi.primitives.interfaces.IGeoCircle

open class GeoCircle : GeoRenderable(), IGeoCircle
{
    override var radius = 100.0
}
