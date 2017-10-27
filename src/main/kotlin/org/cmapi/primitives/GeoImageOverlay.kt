package org.cmapi.primitives

import multiplatform.expected.MpDate
import org.cmapi.primitives.interfaces.IGeoImageOverlay

open class GeoImageOverlay : GeoRenderable(), IGeoImageOverlay
{
    override var imageURI: String = ""
}
