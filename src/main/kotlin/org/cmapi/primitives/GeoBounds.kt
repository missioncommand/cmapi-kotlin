package org.cmapi.primitives

import org.cmapi.primitives.interfaces.IGeoBounds

open class GeoBounds : IGeoBounds
{
    override var west: Double = 0.toDouble()
    override var east: Double = 0.toDouble()
    override var north: Double = 0.toDouble()
    override var south: Double = 0.toDouble()
}
