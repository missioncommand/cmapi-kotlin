package org.cmapi.primitives

interface IGeoContainer : IGeoBase
{
    val children: MutableList<IGeoBase>

    var readOnly: Boolean
}
