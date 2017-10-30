package org.cmapi.primitives

open class GeoDocument : GeoBase(), IGeoDocument
{
    override var documentURI: String = ""
    override var documentMIMEType: String = ""
}
