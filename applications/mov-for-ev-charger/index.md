---
title: MOV for EV Charger Surge Protection
description: Typical MOV and surge-protection questions for EV chargers: AC input, DC fast-charger power paths, control supplies and second-source validation.
permalink: /applications/mov-for-ev-charger/
---
## Answer first

MOV selection for an EV charger must follow the actual AC input, power-conversion and auxiliary/control architecture. A DC fast charger does not turn every internal node into an MOV location. Define where a transient can enter, what needs protection and which operating/fault conditions the full system must withstand.

## Typical protection locations

| Area | Typical question | Verify before selection |
| --- | --- | --- |
| AC input | Is line-side surge protection coordinated with the input architecture? | Supply system, line configuration, protection level and disconnection strategy |
| DC charger power path | Which nodes are exposed by the actual converter topology? | DC voltage range, insulation, topology and protected-node tolerance |
| Auxiliary/control power | Does the control supply have a separate protection requirement? | Supply design, interfaces, layout and component coordination |
| External interfaces | Could cable-connected interfaces be an entry route? | Interface requirements and specified protection approach |

<aside class="notice"><strong>Typical location only.</strong> Actual topology depends on charger design. Do not infer MOV placement inside a power module from a generic charger block diagram.</aside>

## Engineering decision

Review continuous voltage, transient waveform, clamping requirement, layout, upstream/downstream coordination and post-event behavior together. Test protection in representative hardware; the application owner determines the relevant safety and compliance scope.

## Second-source plan

Use the exact existing part/TDS and circuit location as the reference. Screen normalized data, then compare candidate performance in a controlled fixture or system path with stated conditions. A marking or nominal diameter is not a qualification result.

## FAQ

### Is MOV selection the same for AC charging and DC fast charging?

Not automatically. Their supply and conversion architectures can impose different operating and protection conditions.

### What should be compared for a candidate MOV?

Compare complete part identity, continuous limits, V-I test conditions, clamp conditions, waveform duty, package/construction and application evidence.

### Can Owen help arrange a sample comparison?

Yes. Share the existing MOV/TDS, application location and the first result you need to validate.

## Related pages

- [MOV selection guide]({{ '/mov-selection-guide/' | relative_url }})
- [TMOV / thermally protected MOV]({{ '/tmov-thermally-protected-mov/' | relative_url }})
- [MOV second-source qualification]({{ '/mov-second-source-qualification/' | relative_url }})

## Sources

- [Bourns: surge protection for AC and DC powered systems](https://www.bourns.com/docs/technical-documents/technical-library/isomov/application-notes/Surge_Protection_for_AC_and_DC_Powered_Systems_appnote.pdf)
- [Littelfuse TMOV application note](https://www.littelfuse.com/~/media/electronics_technical/application_notes/varistors/littelfuse_designing_with_thermally_protected_tmov_varistors_in_spd_and_ac_line_application_note.pdf)

