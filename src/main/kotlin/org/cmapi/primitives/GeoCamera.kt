package org.cmapi.primitives

open class GeoCamera : GeoBase(), IGeoCamera
{
    override var altitudeMode: IGeoAltitudeMode.AltitudeMode? = null
    override var latitude = 0.0
    override var longitude = 0.0
    override var altitude = 0.0
    override var tilt = 0.0
    override var roll = 0.0
    override var heading = 0.0
}
