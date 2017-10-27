package org.cmapi.primitives

import org.cmapi.primitives.interfaces.IGeoInstance

open class GeoInstance : GeoBase(), IGeoInstance{
    override var parentContainerId: String = "false"
    override var visibility: Boolean = false
}