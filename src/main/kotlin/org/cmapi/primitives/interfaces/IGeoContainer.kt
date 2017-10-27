package org.cmapi.primitives.interfaces

interface IGeoContainer : IGeoBase
{
    val children: List<IGeoBase>

    var readOnly: Boolean
}
