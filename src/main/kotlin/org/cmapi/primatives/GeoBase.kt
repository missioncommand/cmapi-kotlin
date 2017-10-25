package org.cmapi.primitives

import multiplatform.expected.MpUUID
import org.cmapi.primitives.interfaces.IGeoBase

open class GeoBase : IGeoBase
{
    override val id: String = MpUUID().getRandomUUID()
    override var name = ""
    override var dataProviderId: String = ""
    override var description = ""
    override var properties: HashMap<String, String> = HashMap()
}
