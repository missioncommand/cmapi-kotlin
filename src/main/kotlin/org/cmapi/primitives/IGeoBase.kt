package org.cmapi.primitives

import kotlin.String
import kotlin.collections.HashMap
import multiplatform.expected.MpUUID

interface IGeoBase
{
    var name: String
    var geoId: MpUUID
    var dataProviderId: String
    var description : String
    val properties : HashMap<String, String>
}
