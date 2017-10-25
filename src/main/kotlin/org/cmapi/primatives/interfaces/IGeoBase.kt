package org.cmapi.primitives.interfaces

import kotlin.String
import kotlin.collections.HashMap
import multiplatform.expected.MpUUID

interface IGeoBase
{
    var name: String

    var dataProviderId: String

    var description: String

    var properties: HashMap<String, String>

    val id : String;
}
