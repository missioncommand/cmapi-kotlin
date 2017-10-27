package org.cmapi.primitives

import org.cmapi.primitives.interfaces.IGeoBase
import org.cmapi.primitives.interfaces.IGeoContainer

open class GeoContainer : GeoBase(), IGeoContainer
{
    override val children: List<IGeoBase> = arrayListOf()
    override var readOnly = false
}
