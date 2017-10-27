package org.cmapi.primitives

import multiplatform.expected.MpUUID
import org.cmapi.primitives.interfaces.IGeoMessage

open class GeoMessage : IGeoMessage {
    override var channel: String = ""
    override var senderId: MpUUID = MpUUID()
    override var targetId: MpUUID = MpUUID()
    override var messageId: MpUUID = MpUUID()
    override var payload: Any = Any()
}