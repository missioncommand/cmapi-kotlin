package org.cmapi.primitives

import org.cmapi.primitives.interfaces.IGeoDocumentLink

open class GeoDocumentLink : GeoBase(), IGeoDocumentLink
{
    override var documentURI: String = ""
    override var documentMIMEType: String = ""
}