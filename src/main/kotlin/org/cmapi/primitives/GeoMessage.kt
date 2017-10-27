package org.cmapi.primitives

import multiplatform.expected.GetUUIDFunction
import multiplatform.expected.MpUUID
import org.cmapi.primitives.interfaces.IGeoMessage

open class GeoMessage : IGeoMessage {
    override var channel: String = ""
    override var senderId: MpUUID = GetUUIDFunction.randomUUID()
    override var targetId: MpUUID = GetUUIDFunction.randomUUID()
    override var messageId: MpUUID = GetUUIDFunction.randomUUID()
    override var payload: Any = Any()
}