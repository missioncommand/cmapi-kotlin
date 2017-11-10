package org.cmapi.primitives

import multiplatform.expected.GetUUIDFunction
import multiplatform.expected.MpUUID

open class GeoBase : IGeoBase
{
    override var name : String? = ""
    override var geoId: MpUUID? = GetUUIDFunction.randomUUID()
    override var dataProviderId: String? = null
    override var description : String? = ""
    override val properties : HashMap<String, String>? = hashMapOf()
}
