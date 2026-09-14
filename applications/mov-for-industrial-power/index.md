---
title: MOV for Industrial Power and VFD Surge Protection
description: Practical MOV selection and second-source questions for VFDs, servo drives, industrial power supplies and PLC cabinets.
permalink: /applications/mov-for-industrial-power/
---
## Answer first

For VFDs, servo drives, industrial power supplies and PLC cabinets, start with the actual supply path and connected interfaces. MOV protection can be considered at defined transient-entry or sensitive-circuit locations, but the final placement, rating and coordination depend on the completed industrial system design.

## Typical protection locations

| Equipment area | Typical surge-protection concern | What to define |
| --- | --- | --- |
| AC input | Incoming supply transient exposure | Supply configuration, normal voltage, upstream protection and clamp target |
| DC link / conversion path | Architecture-specific stress path | Actual topology, voltage range, insulation and component coordination |
| Auxiliary supply | Separate control-power exposure | Supply architecture, interface tolerance and layout |
| PLC / control cabinet interfaces | External wiring and switching environment | Interface definition, cable route and specified protection method |

<aside class="notice"><strong>Typical location only.</strong> Actual topology depends on system design. Treat VFD, servo and PLC-cabinet protection as separate application reviews, not a copied circuit.</aside>

## Engineering decision

Define operating voltage, surge source/path, desired clamp behavior, space and layout, environment, maintenance strategy and required post-fault response. Review how the MOV interacts with fuses, disconnect devices, GDTs, TVS devices or other parts only in the actual designed protection path.

## Second-source plan

Freeze the approved reference component and application conditions. Compare candidate data under common definitions and run relevant electrical/thermal tests before pilot approval. Preserve lot and change-control requirements with the RFQ record.

## FAQ

### Can one MOV cover every industrial cabinet interface?

No. Supply, control and communication interfaces can have different exposure paths and protection requirements.

### What matters besides surge current?

Continuous voltage, varistor/clamp test condition, waveform, repetition, layout, thermal behavior and failure handling all matter.

### When is a TMOV discussion useful?

When the full protection path requires review of thermal-disconnect behavior under relevant abnormal or end-of-life conditions.

## Related pages

- [MOV selection guide]({{ '/mov-selection-guide/' | relative_url }})
- [TMOV / thermally protected MOV]({{ '/tmov-thermally-protected-mov/' | relative_url }})
- [MOV second-source qualification]({{ '/mov-second-source-qualification/' | relative_url }})

## Sources

- [TDK SIOV selection procedure](https://www.tdk-electronics.tdk.com/download/185710/705a180727925b6c726f5f6b76d6c1fb/siov-selection.pdf)
- [Bourns: surge protection for AC and DC powered systems](https://www.bourns.com/docs/technical-documents/technical-library/isomov/application-notes/Surge_Protection_for_AC_and_DC_Powered_Systems_appnote.pdf)

