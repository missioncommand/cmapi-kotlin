package org.cmapi.primitives

import org.cmapi.primitives.interfaces.IGeoDocument

open class GeoDocument : GeoBase(), IGeoDocument
{
    override var documentURI: String = ""
    override var documentMIMEType: String = ""
}
