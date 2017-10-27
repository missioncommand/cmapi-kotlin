package org.cmapi.primitives

import multiplatform.expected.GetUUIDFunction
import multiplatform.expected.MpUUID
import org.cmapi.primitives.interfaces.IGeoBase

open class GeoBase : IGeoBase
{
    override var name = ""
    override var geoId: MpUUID = GetUUIDFunction.randomUUID()
    override var dataProviderId: String = ""
    override var description = ""
    override val properties : HashMap<String, String> = hashMapOf()
}
