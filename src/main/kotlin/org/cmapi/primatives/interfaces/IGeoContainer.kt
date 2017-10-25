package org.cmapi.primitives.interfaces

interface IGeoContainer
{
    val children: List<IGeoBase>

    var readOnly: Boolean
}
