package org.cmapi.primitives

open class GeoContainer : GeoBase(), IGeoContainer
{
    override val children: MutableList<IGeoBase>? = arrayListOf()
    override var readOnly = false
}
