---
title: MOV for Energy Storage PCS Surge Protection
description: Practical MOV protection-location and second-source questions for energy storage power conversion systems: AC side, DC side and auxiliary power.
permalink: /applications/mov-for-energy-storage-pcs/
---
## Answer first

In an energy storage PCS, MOV and surge-protection selection should distinguish the AC side, DC side and auxiliary-power paths. The correct component and location depend on the real PCS architecture, continuous voltage, earthing scheme, transient entry route, downstream limits and failure response.

## Typical protection locations

| PCS area | Why it needs separate review | Selection / validation focus |
| --- | --- | --- |
| AC side | Grid-connected conductors can be a transient entry route | AC system, line configuration, coordination and protected-node limit |
| DC side | Battery/DC-link architecture has its own voltage and insulation conditions | DC range, topology, insulation coordination and transient path |
| Auxiliary power | Control and service supplies may be exposed independently | Supply type, interface sensitivity and coordinated protection |
| External control interfaces | Field wiring can create a separate exposure route | Interface architecture and applicable protection method |

<aside class="notice"><strong>Typical location only.</strong> Actual topology depends on system design. The PCS owner must define the protection architecture and acceptance criteria.</aside>

## Engineering decision

Do not select from a generic “PCS MOV” label. Identify the actual circuit, normal voltage, surge waveform, permissible clamp at the protected node, layout, thermal behavior and post-fault strategy. Include the surrounding fuse/disconnect or SPD coordination in the review when relevant.

## Second-source plan

Compare existing and candidate part numbers under matched datasheet conditions, then test in a representative PCS path. Retain waveform, source impedance, board/wiring, ambient, measurement method, pulse sequence and post-test result with the decision record.

## FAQ

### Can an AC-side MOV be assumed valid on the DC side?

No. DC operating conditions, topology and insulation constraints may differ materially.

### What is the first qualification gate?

Freeze the existing part, exact circuit location and application conditions before comparing candidates.

### Why review thermal behavior?

Electrical stress, temperature and degradation behavior interact with the completed protection path and its fault-response design.

## Related pages

- [MOV second-source qualification]({{ '/mov-second-source-qualification/' | relative_url }})
- [MOV selection guide]({{ '/mov-selection-guide/' | relative_url }})
- [MOV for industrial power]({{ '/applications/mov-for-industrial-power/' | relative_url }})

## Sources

- [Bourns: surge protection for AC and DC powered systems](https://www.bourns.com/docs/technical-documents/technical-library/isomov/application-notes/Surge_Protection_for_AC_and_DC_Powered_Systems_appnote.pdf)
- [TDK SIOV selection procedure](https://www.tdk-electronics.tdk.com/download/185710/705a180727925b6c726f5f6b76d6c1fb/siov-selection.pdf)

