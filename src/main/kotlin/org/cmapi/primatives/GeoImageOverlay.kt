package org.cmapi.primitives

import multiplatform.expected.MpDate
import org.cmapi.primitives.interfaces.IGeoImageOverlay

class GeoImageOverlay : GeoRenderable(), IGeoImageOverlay {
    override var timeStamp: MpDate = MpDate()
    override var imageURI: String = ""
}
