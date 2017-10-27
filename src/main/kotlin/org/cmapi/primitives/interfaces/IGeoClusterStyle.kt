package org.cmapi.primitives.interfaces

interface IGeoClusterStyle
{
    var label : String
    var title :String
    var summary : String
    var pointStyle : IGeoClusterPointStyle
    var iconStyle : IGeoIconStyle
}