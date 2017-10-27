package org.cmapi.primitives

import org.cmapi.primitives.interfaces.IGeoAltitudeMode

open class GeoAltitudeMode : IGeoAltitudeMode
{
    override var altitudeMode: IGeoAltitudeMode.AltitudeMode = IGeoAltitudeMode.AltitudeMode.ABSOLUTE
}
