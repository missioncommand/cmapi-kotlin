package org.cmapi.primitives

open class GeoDocument : GeoBase(), IGeoDocument
{
    override var documentURI: String? = null
    override var documentMIMEType: String? = null
}
