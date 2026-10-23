# SARS Side Hustle Kit — Social Media Content Calendar (90 Days)

## Strategy: Education-First, Trust-Building, Soft Sell
- **Platform priority**: Instagram Reels > TikTok > Twitter/X > LinkedIn
- **Posting frequency**: 1 Reel/day + 3 carousel/week + 1 long-form/week
- **Content pillars**: Tax tips (40%), Expense hacks (20%), Freelance biz (20%), Personal journey (10%), Product showcase (10%)

---

## WEEK 1: LAUNCH FOUNDATION

| Day | Format | Hook | CTA | Hermes Automation |
|-----|--------|------|-----|-------------------|
| Mon | Reel | "I'm a photographer + student in Pretoria. SARS almost fined me R3k because I didn't know provisional tax existed. Here's the calculator I built so you don't make my mistake." | "Link in bio — free calculator" | `manim-video` animate tax timeline → `cronjob_manage` schedule |
| Tue | Carousel | "5 expenses SA photographers forget to claim" (Gear, Software, Home office, Travel, Insurance) | "Save this for tax season" | `claude-design` carousel HTML → `p5js` export frames |
| Wed | Reel | "POV: You're a student with a side hustle. Do you need to register for provisional tax? 60-second test." | "Try the calculator free" | `execute_code` decision tree logic |
| Thu | Tweet/X Thread | "South African tax terms explained like you're 5: IRP6, ITR12, VAT201, EMP201, UI-19, SDL, VDP" | Thread 🧵 | `web_extract` SARS glossary → summarize |
| Fri | Reel | "My actual Notion dashboard for tracking freelance income, expenses, and tax payments. No aesthetic fluff — just what works." | "Duplicate link in bio" | `notion` duplicate template |
| Sat | Carousel | "Provisional tax dates 2025/26: Aug 31 & Feb 28. Put them in your calendar NOW. ICS file free." | "Download ICS" | `google-workspace` Calendar → ICS export |
| Sun | Story/Q&A | "Ask me anything: SARS, freelance, student tax, load-shedding planning" | "DM me / link in bio" | `instagram-graph-api` story |

---

## WEEK 2: DEEP DIVE — EXPENSES

| Day | Format | Hook | CTA |
|-----|--------|------|-----|
| Mon | Reel | "Home office deduction: The exact formula SARS uses. I save R2,400/year with this." | "Full guide in kit" |
| Tue | Carousel | "Capital vs Current: When to expense gear immediately (Section 12C) vs depreciate. Camera body? Lens? Lighting?" | "Swipe for decision tree" |
| Wed | Reel | "My receipt naming convention: `2025-01-15_Adobe_CreativeCloud_Software_R1050.pdf` — SARS loves it, you'll find it." | "Template in Notion" |
| Thu | Tweet | "VAT on photography services: Standard rated (15%). But exports (overseas clients) = zero-rated. Here's the invoice difference." | Thread |
| Fri | Reel | "Load-shedding = legit business expense? Battery backup, UPS, generator fuel, router on inverter. Track it." | "Expense category list" |
| Sat | Carousel | "Student expense hacks: Textbooks ✓, Laptop (pro-rata) ✓, Internet (pro-rata) ✓, Coffee at varsity ✗" | "Full student list in kit" |
| Sun | Long-form (LinkedIn) | "How I built a R15k/mo photography side hustle while studying Health Sciences full-time — and stayed SARS compliant" | "Read more → kit" |

---

## WEEK 3: PROVISIONAL TAX MASTERY

| Day | Format | Hook | CTA |
|-----|--------|------|-----|
| Mon | Reel | "Safe harbour rule: Pay 100% of last year's tax in two payments = zero penalty risk. Even if you earn double this year." | "Calculator does this auto" |
| Tue | Carousel | "3 provisional tax methods compared: Prior year safe harbour / Current estimate / SARS estimate. Which fits you?" | "Interactive calculator" |
| Wed | Reel | "I missed the Aug 31 deadline once. Here's exactly what happened (penalty + interest) and how I fixed it with VDP." | "VDP guide in kit" |
| Thu | Tweet | "Provisional taxpayer = anyone with >R23,800 non-salary income. That's R2k/mo freelance. Most students don't know this." | "Check calculator" |
| Fri | Reel | "Seasonal income (wedding season Dec-Mar): How to estimate provisional payments when 80% of revenue hits in 4 months." | "Seasonal worksheet" |
| Sat | Carousel | "Payment references decoded: PRV20251 = Provisional 2025 1st payment. PRV20252 = 2nd. Never guess again." | "Cheatsheet PDF" |
| Sun | Story | "Poll: What's your biggest tax fear? A) Penalties B) Missing deductions C) VAT registration D) Don't know" | "Results tomorrow" |

---

## WEEK 4: MEDICAL AID & UIF

| Day | Format | Hook | CTA |
|-----|--------|------|-----|
| Mon | Reel | "Medical tax credits: R364/month for you, R364 for spouse/1st dependant, R246 each extra. That's R13k+ off your tax bill for a family of 4." | "Full breakdown in guide" |
| Tue | Carousel | "Section 6A vs 6B: Credits vs additional expenses. When do your out-of-pocket medical costs become deductible?" | "Worksheet included" |
| Wed | Reel | "Hiring a second shooter? You're an employer. UIF 1% + 1%, SDL 1%, COIDA. Here's the monthly checklist." | "Employer setup guide" |
| Thu | Tweet | "Disability medical credits: Enhanced rates if you/dependant has disability. Many miss this. Check your tax certificate." | "Read more" |
| Fri | Reel | "Medical aid certificate (IT3b) — where to find it, what the codes mean, how to enter in calculator." | "Template in Notion" |
| Sat | Carousel | "UIF benefits you can claim: Maternity (17.32 weeks), Illness, Adoption, Dependant. Contributions ceiling 2025: R17,712/mo." | "Save for reference" |
| Sun | Q&A | "Medical aid / UIF questions — drop them below" | "Answer in Reels" |

---

## WEEKS 5-12: ROTATING PILLARS (Repeat & Remix)

### Content Templates (Hermes-Generatable)

#### Template A: "One Tax Tip" Reel (Daily-able)
```
Hook: "Did you know [specific SA tax fact]?"
Demo: Show calculator/Notion/PDF
CTA: "Full details in the kit — link in bio"
Hermes: `execute_code` pulls random fact from database → `manim-video` 15s animation → `cronjob_manage` schedules
```

#### Template B: "Expense of the Week" Carousel (Weekly)
```
Slide 1: Category name + icon
Slide 2: SARS section + deductibility %
Slide 3: Photographer example
Slide 4: Student example
Slide 5: Receipt requirements
Slide 6: Common mistake
Slide 7: CTA
Hermes: `airtable` expense DB → `claude-design` carousel → `p5js` frames
```

#### Template C: "Freelance Finance Friday" (Weekly)
```
Topic rotation: Invoicing / VAT / Client contracts / Pricing / Cash flow / Admin routine
Format: 60s Reel + carousel summary
Hermes: `notion` content DB → `youtube-content` script → `manim-video` charts
```

#### Template D: "Load-Shedding Monday" (Weekly)
```
Current week's schedule + low-energy task menu + battery check
Hermes: `maps`/`web_extract` ESKOM schedule → `notion` dashboard update → `instagram-graph-api` post
```

#### Template E: "Student Saturday" (Weekly)
```
Study + side hustle balance, student-specific deductions, UoPeople/UNISA/UP tax tips
Hermes: `web_search` student tax queries → `claude-design` infographic
```

---

## AUTOMATION PIPELINE (Hermes)

### Content Generation (`cronjob_manage` daily 6am)
```python
# 1. Pull from content database (Airtable/Notion)
# 2. Generate assets:
#    - Reel: manim-video (tax animation) + p5js (charts) + ffmpeg (combine)
#    - Carousel: claude-design HTML → p5js frames → video/GIF
#    - Tweet: web_extract + humanizer → thread
# 3. Write captions + hashtags (per platform)
# 4. Schedule via Instagram Graph API / TikTok API / Twitter API
# 5. Log to Notion content calendar
```

### Weekly Batch (Sunday 2pm)
```python
# 1. Generate 7 Reels + 3 Carousels + 5 Tweets + 1 Long-form
# 2. Review queue (human approval in Notion)
# 3. Schedule Mon-Sun
# 4. Update content calendar
```

### Monthly (1st of month)
```python
# 1. Analytics review: top 3 posts → replicate format
# 2. Keyword research: "SA provisional tax", "freelance expenses South Africa", etc.
# 3. Update content database with new angles
# 4. Refresh landing page testimonials
# 5. Check Gumroad conversion funnel
```

---

## HASHTAG SETS (Rotate)

**Tax Core**: #SATax #ProvisionalTax #SARS #SouthAfricanTax #TaxTipsSA #TaxSeasonSA
**Freelance**: #SASideHustle #FreelanceSA #PhotographerLife #StudentEntrepreneur #PretoriaCreative
**Niche**: #MedicalTaxCredits #HomeOfficeDeduction #VATSouthAfrica #UIF #LoadSheddingBusiness
**Geo**: #Pretoria #Gauteng #SouthAfrica #Mzansi #Joburg #CapeTown #Durban

---

## ENGAGEMENT AUTOMATION

### Comment → DM Funnel
```
Trigger: Comment contains "calculator", "template", "how", "link"
Action: Auto-reply "Check your DMs! 📩" → Send Gumroad free calculator link
Hermes: instagram-graph-api webhook → execute_code filter → DM send
```

### UGC Collection
```
Trigger: Story mention / tag @sarssidehustlekit
Action: Repost to Stories + save to Notion "Testimonials" DB
Hermes: instagram-graph-api mention webhook → notion.pages.create
```

### Email Capture
```
Lead magnet: Free provisional tax calculator (web) + ICS calendar
Landing page: claude-design HTML (already built)
Email sequence: email-inbox-triage 5-day nurture
  Day 1: Calculator link + welcome
  Day 2: Expense category cheatsheet
  Day 3: Invoice template walkthrough
  Day 4: Load-shedding dashboard demo
  Day 5: Kit offer + 48hr bonus (Pro Bundle upgrade)
```

---

## METRICS TO TRACK (Notion Dashboard)

| Metric | Target | Tool |
|--------|--------|------|
| Reel views/day | 10k+ by day 30 | Instagram Insights API |
| Profile visits/day | 500+ | Instagram Insights |
| Link clicks/day | 100+ | Gumroad/Linktree |
| Email signups/week | 50+ | ConvertKit/MailerLite |
| Kit sales/week | 10+ | Gumroad webhook |
| Revenue/month | R10k+ by month 3 | Gumroad + Sheets |
| Discord members | 200+ by month 3 | Discord API |

---

## HERMES SKILLS NEEDED

- `manim-video` — tax animations, charts
- `p5js` — carousel frames, interactive calculator embed
- `claude-design` — landing page, carousel HTML, email templates
- `notion` — content DB, template duplication, analytics dashboard
- `airtable` — expense categories, content calendar, lead tracking
- `google-workspace` — Calendar ICS, Sheets calculator, Drive assets
- `instagram-graph-api` / `tiktok-api` — posting, DM, webhooks
- `email-inbox-triage` — nurture sequence
- `cronjob_manage` — daily/weekly/monthly pipelines
- `web_extract` / `web_search` — SARS updates, competitor content
- `humanizer` — caption writing, email copy
- `youtube-content` — long-form script from Reel transcripts