package org.cmapi.primitives

import org.cmapi.primitives.interfaces.IGeoAltitudeMode
import org.cmapi.primitives.interfaces.IGeoLookAt

class GeoLookAt : GeoBase(), IGeoLookAt {
    override var altitudeMode: IGeoAltitudeMode.AltitudeMode = IGeoAltitudeMode.AltitudeMode.ABSOLUTE
    override var latitude = 0.0
    override var longitude = 0.0
    override var altitude = 0.0
    override var tilt = 0.0
    override var heading = 0.0
    override var range = 1000000.0
}
