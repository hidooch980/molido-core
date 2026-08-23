# MOLIDO GAME ARCHITECTURE

### Purpose

The MOLIDO game is the interactive layer of the THE LAST SIGNAL universe.

Players should not simply consume the story.

They should participate in it.

Discover. Play. Collect. Solve. Connect.

### CORE GAME CONCEPT

A mysterious signal has reached Earth.

Players receive fragments of the signal.

Each fragment may contain:

- Coordinates
- Symbols
- Images
- Audio
- Messages
- Puzzles
- Story clues

Players must combine information and collaborate to understand the larger mystery.

```text
GAME LOOP
Discover Signal
      ↓
Receive Mission
      ↓
Explore
      ↓
Solve Puzzle
      ↓
Earn XP
      ↓
Unlock Story
      ↓
Collect Fragment
      ↓
Community Challenge
      ↓
New Signal
```



The loop is designed to encourage meaningful participation rather than artificial engagement.

### PLAYER PROFILE

Future player profiles may include:

- Username
- Avatar
- Country
- Language
- XP
- Level
- Missions
- Achievements
- Collection
- Story progress
- Community participation

Sensitive account information must remain private.

### XP SYSTEM

Players can earn XP through legitimate gameplay.

Possible activities:

- Completing missions
- Solving puzzles
- Discovering story fragments
- Participating in approved challenges
- Completing educational activities

XP is an in-game progression metric.

XP does not automatically represent money or financial value.

```text
LEVEL SYSTEM
Example:
Level 1
 ↓
Level 2
 ↓
Level 3
 ↓
...
 ↓
Advanced Explorer
```



Level thresholds should be configurable.

The system must prevent artificial XP inflation.

### COLLECTION SYSTEM

Players may collect digital items.

Examples:

- Signal Fragments
- Coordinates
- Symbols
- Story Cards
- Character Records
- Artifacts
- Mission Badges

Collections may unlock:

- Story information
- Visuals
- Missions
- Lore
- Special experiences

### COLLECTION RARITY

Future rarity categories may include:

- Common
- Uncommon
- Rare
- Epic
- Legendary
- Unique

Rarity must have clearly defined rules.

Rarity should not be presented as guaranteed monetary value.

### STORY UNLOCK SYSTEM

Some story elements may unlock after completing specific missions.

```text
Example:
Fragment A
   +
Fragment B
   +
Mission 04
   ↓
Hidden Episode
```



The system must maintain story continuity.

### QUEST SYSTEM

Quest types:

Story Quest

Progresses the main narrative.

Discovery Quest

Find hidden information.

Puzzle Quest

Solve a problem.

Community Quest

Participate with other players.

Seasonal Quest

Limited-time story events.

### DAILY MISSIONS

Future daily missions may include:

- Signal investigation
- Puzzle
- Story discovery
- Collection challenge
- Community activity

Daily missions should provide meaningful gameplay.

They must not require spam activity.

### GLOBAL EVENTS

MOLIDO may host worldwide events.

Examples:

- Global Signal
- Community Puzzle
- Story Unlock
- Mystery Event
- Seasonal Event

Events can be localized by language and time zone.

### MULTIPLAYER / COMMUNITY

Future features may include:

- Teams
- Communities
- Cooperative missions
- Shared puzzles
- Leaderboards
- Global events

Community systems require anti-abuse protection.

### LEADERBOARDS

Possible rankings:

- XP
- Missions
- Discoveries
- Puzzle performance
- Community achievements

Leaderboards should use anti-cheat systems.

They must not encourage harmful or fraudulent behavior.

### ANTI-CHEAT

Future anti-cheat systems may detect:

- Bots
- Automated gameplay
- Abnormal XP
- Repeated exploit patterns
- Multiple-account abuse
- Manipulated requests

Suspicious accounts may be flagged for review.

### REFERRAL SYSTEM

A future referral system may reward legitimate invitations.

Rules must prevent:

- Self-referrals
- Fake accounts
- Bot referrals
- Referral farming
- Spam

Rewards must be clearly defined.

### REWARD SYSTEM

Phase 0 rewards are non-financial.

Examples:

- XP
- Badges
- Story access
- Digital collectibles
- Cosmetic items

No reward should be presented as guaranteed financial return.

### BLOCKCHAIN PREPARATION

The game architecture may eventually support blockchain-based assets.

However:

Blockchain is not required for the first version.

Future blockchain integration requires:

- Technical validation
- Security testing
- Smart-contract auditing
- Legal/compliance review
- User protection

### DIGITAL ASSETS

If blockchain is introduced later, the architecture may support:

- Ownership
- Transfer
- Verification
- Provenance

Blockchain assets must never be promised before the underlying system exists.

### AI GAME MASTER

Future AI systems may act as a Game Master.

Possible functions:

- Generate missions
- Explain puzzles
- Guide players
- Generate story variations
- Adapt difficulty
- Provide hints
- Maintain lore consistency

AI Game Master must follow game rules.

### AI PERSONALIZATION

AI may personalize:

- Mission recommendations
- Difficulty
- Story explanations
- Content recommendations

Personalization must respect privacy.

### PLAYER SAFETY

The game should protect users from:

- Harassment
- Spam
- Fraud
- Manipulation
- Dangerous challenges
- Unauthorized data exposure

Moderation systems should include reporting and review.

### AGE SAFETY

If the game is available to minors, additional protections must be implemented according to the target market and applicable laws.

Features may include:

- Age-appropriate content
- Privacy protections
- Parental controls where required
- Restricted communication features

### GAME ECONOMY

The initial game economy is non-financial.

Potential future systems:

```text
XP
 ↓
Levels
 ↓
Collections
 ↓
Cosmetics
 ↓
Future Utility
```



Any financial or blockchain economy requires separate design and security review.

### DATABASE CONCEPT

Future game data may include:

Users

Players

Profiles

XP

Levels

Missions

Quests

Collections

Items

Achievements

Events

### Leaderboards

### Rewards

User data must be isolated and access-controlled.

### API CONCEPT

Future game APIs may include:

GET  /player/profile

GET  /player/progress

GET  /missions

POST /missions/:id/complete

GET  /collection

### GET  /events

### GET  /leaderboard

All APIs require authentication and authorization where appropriate.

### SECURITY

Game security must include:

- Server-side validation
- Anti-cheat
- Rate limiting
- Request validation
- Secure sessions
- Audit logs
- Abuse detection

Critical game state must not rely solely on client-side values.

### SCALABILITY

The game architecture should eventually support:

- Large user populations
- Regional infrastructure
- Global events
- High concurrent traffic
- Distributed services

Scaling should be driven by actual usage.

- GAME DEVELOPMENT PHASES
- Phase 1
- Interactive story prototype.
- Phase 2
- Missions + XP.
- Phase 3
- Collection system.
- Phase 4
- Community events.
- Phase 5
- AI Game Master.
- Phase 6
- Advanced multiplayer.
- Future
- Optional blockchain integration.

### SUCCESS CRITERIA

The first playable version is successful when users can:

- Enter the universe.
- Receive a signal.
- Complete a mission.
- Earn XP.
- Discover a fragment.
- Progress the story.
- Return for another mission.

### CORE PRINCIPLE

The game should make users feel:

### "I discovered something."

Not:

### "I was forced to click something."

The goal is meaningful engagement through mystery, discovery, story, and community.

- FINAL DESIGN
- STORY
- +
- GAME
- +
- COLLECTION
- +
- COMMUNITY
- +
- AI
- =
- MOLIDO UNIVERSE

Every player is part of the signal.
