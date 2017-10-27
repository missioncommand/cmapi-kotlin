package org.cmapi.primitives.interfaces

interface IGeoClusterStrategy
{
    var threshold : String
    var distance : String
    var clusterStyle : IGeoClusterStyle
}