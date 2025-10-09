# DNS Setup Visual Guide

## How It Works

```
User Types in Browser:
alberto.rosselli.no
         ↓
         ↓
DNS Lookup (domene.shop)
         ↓
         ↓
CNAME Record Found:
alberto → your-username.github.io
         ↓
         ↓
GitHub Pages Server
         ↓
         ↓
Your Presentation Page Loads!
```

---

## DNS Configuration in domene.shop

### What You Need to Add

```
┌─────────────────────────────────────────────────┐
│         DNS Records for rosselli.no             │
├─────────────────────────────────────────────────┤
│                                                 │
│  Type: CNAME                                    │
│  Name: alberto                                  │
│  Value: your-username.github.io                 │
│  TTL: 3600                                      │
│                                                 │
└─────────────────────────────────────────────────┘
```

### Example with Real Username

If your GitHub username is `albertorosselli`:

```
┌─────────────────────────────────────────────────┐
│  Type: CNAME                                    │
│  Name: alberto                                  │
│  Value: albertorosselli.github.io               │
│  TTL: 3600                                      │
└─────────────────────────────────────────────────┘
```

---

## Complete Setup Flow

```
┌──────────────────────┐
│  1. GitHub Setup     │
│  ─────────────────   │
│  • Create repo       │
│  • Upload files      │
│  • Enable Pages      │
│  • Add custom domain │
└──────────┬───────────┘
           │
           ↓
┌──────────────────────┐
│  2. DNS Setup        │
│  ─────────────────   │
│  • Log into          │
│    domene.shop       │
│  • Add CNAME record  │
│  • Save changes      │
└──────────┬───────────┘
           │
           ↓
┌──────────────────────┐
│  3. Wait for DNS     │
│  ─────────────────   │
│  • 10-30 minutes     │
│  • Check propagation │
└──────────┬───────────┘
           │
           ↓
┌──────────────────────┐
│  4. Enable HTTPS     │
│  ─────────────────   │
│  • In GitHub Pages   │
│  • Enforce HTTPS     │
│  • Wait 10-15 min    │
└──────────┬───────────┘
           │
           ↓
┌──────────────────────┐
│  ✅ DONE!            │
│  ─────────────────   │
│  alberto.rosselli.no │
│  is LIVE!            │
└──────────────────────┘
```

---

## domene.shop Control Panel - What to Look For

### Common DNS Panel Layouts

**Layout 1: Table Format**
```
┌────────┬──────────┬─────────────────────────┬──────┐
│ Type   │ Name     │ Value                   │ TTL  │
├────────┼──────────┼─────────────────────────┼──────┤
│ A      │ @        │ 123.45.67.89           │ 3600 │
│ CNAME  │ www      │ rosselli.no            │ 3600 │
│ CNAME  │ alberto  │ username.github.io     │ 3600 │ ← Add this
└────────┴──────────┴─────────────────────────┴──────┘
```

**Layout 2: Form Format**
```
┌─────────────────────────────────────────┐
│  Add DNS Record                         │
├─────────────────────────────────────────┤
│  Record Type: [CNAME ▼]                 │
│                                         │
│  Host/Name: [alberto            ]       │
│                                         │
│  Points to:  [username.github.io]       │
│                                         │
│  TTL: [3600 ▼]                          │
│                                         │
│  [Add Record]  [Cancel]                 │
└─────────────────────────────────────────┘
```

**Layout 3: Advanced Zone Editor**
```
┌─────────────────────────────────────────┐
│  DNS Zone Editor - rosselli.no          │
├─────────────────────────────────────────┤
│                                         │
│  CNAME Records:                         │
│  ┌───────────────────────────────────┐  │
│  │ Name: alberto                     │  │
│  │ CNAME: username.github.io.        │  │
│  │ TTL: 3600                         │  │
│  └───────────────────────────────────┘  │
│  [Add CNAME Record]                     │
└─────────────────────────────────────────┘
```

---

## GitHub Pages Configuration

### Custom Domain Settings

```
┌─────────────────────────────────────────────────┐
│  GitHub Pages Settings                          │
├─────────────────────────────────────────────────┤
│                                                 │
│  Source                                         │
│  Branch: [main ▼]  Folder: [/ (root) ▼]        │
│  [Save]                                         │
│                                                 │
│  Custom domain                                  │
│  [alberto.rosselli.no                    ]      │
│  [Save]                                         │
│                                                 │
│  ✅ DNS check successful                        │
│                                                 │
│  ☑ Enforce HTTPS                                │
│                                                 │
└─────────────────────────────────────────────────┘
```

---

## Verification Steps

### 1. Check DNS Propagation

**Using dnschecker.org:**
```
┌─────────────────────────────────────────┐
│  DNS Checker                            │
├─────────────────────────────────────────┤
│  Domain: [alberto.rosselli.no    ]      │
│  Type: [CNAME ▼]                        │
│  [Search]                               │
│                                         │
│  Results:                               │
│  🌍 Norway:    username.github.io ✅    │
│  🌍 USA:       username.github.io ✅    │
│  🌍 UK:        username.github.io ✅    │
│  🌍 Germany:   username.github.io ✅    │
└─────────────────────────────────────────┘
```

### 2. Check Website Loading

**Browser Test:**
```
Step 1: http://alberto.rosselli.no
        ↓
        Should load your page
        
Step 2: https://alberto.rosselli.no
        ↓
        Should load with 🔒 secure icon
```

---

## Common Field Names in DNS Panels

Different providers use different terms:

| What You Need | Possible Field Names |
|---------------|---------------------|
| **Record Type** | Type, Record Type, DNS Type |
| **Subdomain** | Name, Host, Hostname, Subdomain |
| **Target** | Value, Points to, Target, CNAME, Destination |
| **Time to Live** | TTL, Cache Time |

**Example Mappings:**

```
Our Guide          domene.shop might say:
─────────────      ─────────────────────
Type: CNAME    →   Record Type: CNAME
Name: alberto  →   Host: alberto
Value: xxx.io  →   Points to: xxx.io
TTL: 3600      →   TTL: 1 hour
```

---

## Quick Copy-Paste Values

### For GitHub Pages

Replace `YOUR_USERNAME` with your actual GitHub username:

```
Type:  CNAME
Name:  alberto
Value: YOUR_USERNAME.github.io
TTL:   3600
```

### Example (if username is albertorosselli):

```
Type:  CNAME
Name:  alberto
Value: albertorosselli.github.io
TTL:   3600
```

---

## Troubleshooting Flowchart

```
Is alberto.rosselli.no loading?
         │
    ┌────┴────┐
   NO        YES
    │          │
    ↓          ↓
Check DNS   Working! ✅
    │       Enable HTTPS
    ↓
Use dnschecker.org
    │
    ┌────┴────┐
   NO        YES
    │          │
    ↓          ↓
Check:      Wait 30 min
• Correct    then try
  CNAME      again
• Saved
• Wait more
```

---

## Timeline Visual

```
Minute 0:  ┌─────────────────┐
           │ Create GitHub   │
           │ Repository      │
           └────────┬────────┘
                    │
Minute 5:  ┌────────┴────────┐
           │ Upload Files    │
           │ Enable Pages    │
           └────────┬────────┘
                    │
Minute 8:  ┌────────┴────────┐
           │ Add Custom      │
           │ Domain          │
           └────────┬────────┘
                    │
Minute 10: ┌────────┴────────┐
           │ Configure DNS   │
           │ in domene.shop  │
           └────────┬────────┘
                    │
           ⏰ Wait 10-30 min
                    │
Minute 40: ┌────────┴────────┐
           │ DNS Propagated  │
           │ Enable HTTPS    │
           └────────┬────────┘
                    │
           ⏰ Wait 10-15 min
                    │
Minute 55: ┌────────┴────────┐
           │ ✅ LIVE!        │
           │ alberto.        │
           │ rosselli.no     │
           └─────────────────┘
```

---

## Final Result

### What Users Will See

```
┌──────────────────────────────────────────────┐
│  🔒 https://alberto.rosselli.no              │
├──────────────────────────────────────────────┤
│                                              │
│         Your Beautiful Presentation          │
│         Page with Dark/Light Mode            │
│                                              │
│  • Professional design                       │
│  • Your photo and CV                         │
│  • Secure HTTPS                              │
│  • Fast loading                              │
│  • Mobile-friendly                           │
│                                              │
└──────────────────────────────────────────────┘
```

---

## Need Help?

If you see different fields in domene.shop, just tell me:
1. What fields you see
2. Take a screenshot if possible
3. I'll tell you exactly what to enter

**The key is: Create a CNAME record pointing `alberto` to `your-username.github.io`**

