package org.cmapi.primitives

import multiplatform.expected.MpDate
import org.cmapi.primitives.interfaces.IGeoAirControlMeasure
import org.cmapi.primitives.interfaces.IGeoBase

class GeoAirControlMeasure : GeoRenderable(), IGeoAirControlMeasure
{
    override var children: List<IGeoBase> =  arrayListOf()
    override var timeStamp: MpDate = MpDate()
    override var acmType: IGeoAirControlMeasure.AcmType = IGeoAirControlMeasure.AcmType.TRACK
    override var attributes: HashMap<IGeoAirControlMeasure.Attribute, String> = HashMap()
}