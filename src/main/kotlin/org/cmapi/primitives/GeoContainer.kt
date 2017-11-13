package org.cmapi.primitives

open class GeoContainer : GeoBase(), IGeoContainer
{
    override val children: List<IGeoBase> = arrayListOf()
    override var readOnly = false
}
