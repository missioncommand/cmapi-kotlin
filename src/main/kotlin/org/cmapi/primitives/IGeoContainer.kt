package org.cmapi.primitives

interface IGeoContainer : IGeoBase
{
    val children: List<IGeoBase>

    var readOnly: Boolean
}
