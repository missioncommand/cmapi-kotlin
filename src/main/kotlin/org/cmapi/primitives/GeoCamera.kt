package org.cmapi.primitives

import org.cmapi.primitives.interfaces.IGeoAltitudeMode
import org.cmapi.primitives.interfaces.IGeoCamera

open class GeoCamera : GeoBase(), IGeoCamera
{
    override var altitudeMode: IGeoAltitudeMode.AltitudeMode = IGeoAltitudeMode.AltitudeMode.ABSOLUTE
    override var latitude = 0.0
    override var longitude = 0.0
    override var altitude = 0.0
    override var tilt = 0.0
    override var roll = 0.0
    override var heading = 0.0
}
