package org.cmapi.primitives

import multiplatform.expected.MpUUID

interface IGeoMessage
{
    var channel : String?
    var senderId : MpUUID?
    var targetId : MpUUID?
    var messageId : MpUUID?
    var payload : Any?
}