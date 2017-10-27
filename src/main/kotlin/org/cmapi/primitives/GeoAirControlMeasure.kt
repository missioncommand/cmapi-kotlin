package org.cmapi.primitives

import org.cmapi.primitives.interfaces.IGeoAirControlMeasure
import org.cmapi.primitives.interfaces.IGeoAirControlMeasure.Attribute;

open class GeoAirControlMeasure : GeoRenderable(), IGeoAirControlMeasure
{
    override var acmType: IGeoAirControlMeasure.AcmType = IGeoAirControlMeasure.AcmType.TRACK
    override var attributes: HashMap<Attribute, String> = HashMap()
}