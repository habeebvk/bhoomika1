/**
 * Bhoomika Landsale — Curated Land & Real Estate Portfolio Data
 * Structure and listing conventions adapted from landworld.in reference research.
 */

window.BHOOMIKA_DATA = {
  categories: [
    { id: 'all', label: 'All Properties', short: 'All Assets', icon: 'layers' },
    { id: 'Residential Plots', label: 'Residential Plots', short: 'Residential Land', icon: 'map-pin' },
    { id: 'Commercial', label: 'Commercial & Hubs', short: 'Commercial', icon: 'building' },
    { id: 'Houses & Villas', label: 'Houses & Villas', short: 'Villas & Homes', icon: 'home' },
    { id: 'Apartments', label: 'Apartments & Flats', short: 'Apartments', icon: 'grid' },
    { id: 'Hospitality', label: 'Hospitality & Resorts', short: 'Hospitality', icon: 'sun' },
    { id: 'Agricultural Land', label: 'Agricultural & Estates', short: 'Farmland', icon: 'leaf' }
  ],

  districts: [
    { name: 'Kozhikode', corridor: 'Thondayad Bypass & Kunnamangalam', highlight: 'Flagship HQ & Bypass Corridor' },
    { name: 'Wayanad', corridor: 'Vythiri, Kalpetta & Sulthan Bathery', highlight: 'Hillside Resorts & Plantation Tracts' },
    { name: 'Malappuram', corridor: 'Perinthalmanna, Manjeri & Nilambur', highlight: 'Highway Commercial & Villa Plots' },
    { name: 'Kochi', corridor: 'Kakkanad, Edappally & Marine Drive', highlight: 'IT Corridor Flats & Prime Land' },
    { name: 'Thrissur', corridor: 'Swaraj Round & Punkunnam Belt', highlight: 'Commercial Blocks & Town Plots' },
    { name: 'Palakkad', corridor: 'Kanjikode & Attappady Valley', highlight: 'Fertile Acreage & Industrial Land' },
    { name: 'Thiruvananthapuram', corridor: 'Technopark & Kovalam Coast', highlight: 'Residential Enclaves & Coastal Land' },
    { name: 'Kollam', corridor: 'Ashtamudi Waterfront & NH-66', highlight: 'Waterfront Villas & Highway Plots' }
  ],

  listings: [
    {
      id: 'BL-504',
      title: 'Emerald Ridge Gated Residential Enclave',
      category: 'Residential Plots',
      mode: 'Buy',
      district: 'Kozhikode',
      locality: 'Kunnamangalam — Medical College Belt',
      cents: 12.5,
      builtSqft: null,
      priceLakhs: 44.0,
      frontage: '58 ft Paved Frontage',
      roadWidth: '8m Tar Road',
      zoning: 'Residential (Clear Freehold)',
      assured: true,
      featured: true,
      image: 'assets/images/prop-plot.jpg',
      summary: 'Level, square-cut residential villa plot inside a walled stone enclave with underground cabling, borewell access, and 6-minute connectivity to Thondayad Bypass.',
      highlights: ['Clear Freehold Title', 'Natural Stone Compound', 'Borewell & 3-Phase Power', '6 Mins to NH Bypass'],
      assuredChecks: [
        '30-Year Prior Deed Chain Verified',
        'Nil Encumbrance Certificate (EC)',
        'Digital FMB & Revenue Survey Match',
        'Up-to-Date Village Land Tax Paid',
        'Approved Residential Conversion',
        'Physical Boundary Pillars Marked'
      ]
    },
    {
      id: 'BL-341',
      title: 'Bypass Sovereign Commercial Frontage',
      category: 'Commercial',
      mode: 'Buy',
      district: 'Kozhikode',
      locality: 'Thondayad — Mavoor Road Junction',
      cents: 24.0,
      builtSqft: 9800,
      priceLakhs: 148.0,
      frontage: '110 ft Highway Frontage',
      roadWidth: '24m NH-66 Arterial',
      zoning: 'Commercial Zone A',
      assured: true,
      featured: true,
      image: 'assets/images/prop-commercial.jpg',
      summary: 'High-visibility commercial corner parcel and flagship retail-office structure near the IT & retail corridor, ideal for corporate headquarters, showrooms, or clinics.',
      highlights: ['110 ft Main Road Frontage', 'High Rental Yield Potential', 'Dedicated Visitor Parking', 'Flexible Floor Plates'],
      assuredChecks: [
        'Commercial Zoning & FAR Cleared',
        'Fire & Municipal Occupancy Ready',
        'Nil Encumbrance Certificate (EC)',
        'Survey & Boundary Demarcation Done',
        'Clean Corporate Title Transfer',
        'Up-to-Date Tax & Cess Receipts'
      ]
    },
    {
      id: 'BL-408',
      title: 'Courtyard Teak & Laterite Signature Villa',
      category: 'Houses & Villas',
      mode: 'Buy',
      district: 'Malappuram',
      locality: 'Perinthalmanna — Jubilee Hills',
      cents: 16.0,
      builtSqft: 3450,
      priceLakhs: 118.0,
      frontage: '65 ft Corner Access',
      roadWidth: '7m Concrete Avenue',
      zoning: 'Residential Villa Estate',
      assured: true,
      featured: true,
      image: 'assets/images/prop-villa.jpg',
      summary: 'Architect-designed 4BHK courtyard villa crafted in warm natural laterite and seasoned teakwood, set amid landscaped gardens with private reflecting pool and borewell.',
      highlights: ['4 BHK Architectural Villa', 'Seasoned Teak Joinery', 'Open Courtyard & Pool', 'Private Borewell & Solar'],
      assuredChecks: [
        'Approved Building Plan & Permit',
        'Clear Title & Possession Deed',
        'Structural & Waterproofing Audit',
        'Nil Encumbrance Certificate (EC)',
        'Up-to-Date Property & Land Tax',
        'Physical Boundary Wall Verified'
      ]
    },
    {
      id: 'BL-612',
      title: 'Mist Valley Boutique Eco-Resort & Cottages',
      category: 'Hospitality',
      mode: 'Invest',
      district: 'Wayanad',
      locality: 'Vythiri — Chembra Peak Viewpoint',
      cents: 240.0,
      builtSqft: 11200,
      priceLakhs: 365.0,
      frontage: '190 ft Scenic Estate Road',
      roadWidth: '6m All-Weather Paved',
      zoning: 'Tourism & Hospitality Approved',
      assured: true,
      featured: true,
      image: 'assets/images/prop-hospitality.jpg',
      summary: 'Operational 2.4-acre hill-crest hospitality estate featuring eight luxury timber-stone cottages, infinity sunrise deck, spring water source, and year-round occupancy.',
      highlights: ['2.4 Acres Hilltop View', '8 Luxury Timber Cottages', 'Tourism Dept. Registered', '11.4% Historical Gross Yield'],
      assuredChecks: [
        'Tourism & Panchayat Licenses Active',
        'Non-Forest & Revenue Clearance Verified',
        'Digital Contour & Boundary Survey',
        'Nil Encumbrance Certificate (EC)',
        'Clean Ownership Transfer Ready',
        'On-Site Asset Audit Completed'
      ]
    },
    {
      id: 'BL-719',
      title: 'Sahyadri Organic Spice & Coconut Estate',
      category: 'Agricultural Land',
      mode: 'Invest',
      district: 'Palakkad',
      locality: 'Attappady — Silent Valley Foothills',
      cents: 350.0,
      builtSqft: null,
      priceLakhs: 185.0,
      frontage: '260 ft Estate Track',
      roadWidth: '6m Gravel & Tar Approach',
      zoning: 'Agricultural / Plantation Freehold',
      assured: true,
      featured: false,
      image: 'assets/images/prop-farmland.jpg',
      summary: '3.5 acres of fertile red-soil agricultural estate planted with high-yield coconut palms, pepper vines, and nutmeg, complete with perennial stream and drip irrigation.',
      highlights: ['3.5 Acres Mature Plantation', 'Perennial Water & Borewell', 'Caretaker Cottage On-Site', 'Strong Capital Appreciation'],
      assuredChecks: [
        'Clear Agricultural Patta & Title',
        'No Ceiling / Land Reform Disputes',
        'Stream & Water Rights Documented',
        'Nil Encumbrance Certificate (EC)',
        'FMB Survey Boundary Confirmed',
        'Current Revenue Tax Paid'
      ]
    },
    {
      id: 'BL-225',
      title: 'Skyline Verandah Luxury Residences',
      category: 'Apartments',
      mode: 'Buy',
      district: 'Kochi',
      locality: 'Kakkanad — Infopark Expressway',
      cents: 6.2,
      builtSqft: 2180,
      priceLakhs: 132.0,
      frontage: '40m Boulevard Entry',
      roadWidth: '18m Smart City Road',
      zoning: 'RERA Registered Urban Zone',
      assured: true,
      featured: true,
      image: 'assets/images/prop-apartment.jpg',
      summary: 'Sun-drenched 3BHK sky residences with deep teak-louvered balconies, podium botanical gardens, EV bays, and seamless access to Kochi Metro & Infopark hubs.',
      highlights: ['RERA Registered Tower', 'Deep Landscaped Balconies', 'Clubhouse & Infinity Pool', 'High NRI Lease Demand'],
      assuredChecks: [
        'RERA & Municipal Occupancy Cleared',
        'Undivided Share (UDS) Verified',
        'Builder Escrow & Bank APF Approved',
        'Nil Encumbrance Certificate (EC)',
        'Fire, Lift & Structural NOCs Ready',
        'Transparent Carpet-Area Audit'
      ]
    },
    {
      id: 'BL-305',
      title: 'Mavoor Gardens Ready-to-Build Villa Plot',
      category: 'Residential Plots',
      mode: 'Buy',
      district: 'Kozhikode',
      locality: 'Mavoor — Chevayur Enclave',
      cents: 9.5,
      builtSqft: null,
      priceLakhs: 28.5,
      frontage: '46 ft East Facing',
      roadWidth: '6m Concrete Lane',
      zoning: 'Residential Freehold',
      assured: true,
      featured: false,
      image: 'assets/images/prop-plot.jpg',
      summary: 'Vaastu-compliant east-facing 9.5-cent residential plot in a peaceful family neighborhood, surrounded by independent homes and close to schools and supermarkets.',
      highlights: ['East-Facing Vaastu Plot', 'Zero Flood-Zone Elevation', 'Municipal Water Line', 'Immediate Construction Ready'],
      assuredChecks: [
        'Prior Deed Verification Completed',
        'Nil Encumbrance Certificate (EC)',
        'Digital Survey Sketch Attached',
        'Village Land Tax Up-to-Date',
        'Clear Residential Classification',
        'Corner Stones Demarcated'
      ]
    },
    {
      id: 'BL-814',
      title: 'Swaraj Commercial Suites & Virtual Hub',
      category: 'Commercial',
      mode: 'Lease',
      district: 'Thrissur',
      locality: 'Punkunnam — City Ring Road',
      cents: 18.0,
      builtSqft: 6400,
      priceLakhs: 215.0,
      frontage: '85 ft Ring Road Frontage',
      roadWidth: '18m Municipal Road',
      zoning: 'Commercial & Managed Office',
      assured: false,
      featured: false,
      image: 'assets/images/prop-commercial.jpg',
      summary: 'Flexible commercial office floors and virtual workspace suites available for outright acquisition or long-term corporate lease in Thrissur’s prime business belt.',
      highlights: ['Outright Buy or Lease', 'Plug & Play Virtual Suites', 'Dedicated Lift & Backup', 'Prime Commercial Address'],
      assuredChecks: [
        'Commercial Title Verified',
        'Building Tax & License Active',
        'Lease Escrow Agreement Ready',
        'Power & Backup Load Certified',
        'Parking Bay Allocation Clear',
        'Survey Sketch Verified'
      ]
    },
    {
      id: 'BL-902',
      title: 'Ashtamudi Backwater Heritage Villa Land',
      category: 'Residential Plots',
      mode: 'Invest',
      district: 'Kollam',
      locality: 'Thevally — Ashtamudi Waterfront',
      cents: 32.0,
      builtSqft: null,
      priceLakhs: 164.0,
      frontage: '95 ft Backwater & Road',
      roadWidth: '7m Paved Access',
      zoning: 'CRZ Cleared Residential',
      assured: true,
      featured: false,
      image: 'assets/images/hero-estate.jpg',
      summary: 'Rare dual-access waterfront residential estate overlooking tranquil Ashtamudi Lake, ideal for a bespoke luxury mansion or boutique waterfront retreat.',
      highlights: ['Direct Backwater Frontage', 'CRZ Compliance Documented', 'Mature Coconut Canopy', 'Private Boat Jetty Potential'],
      assuredChecks: [
        'CRZ Distance Clearance Verified',
        '30-Year Clear Title History',
        'Nil Encumbrance Certificate (EC)',
        'Revenue Sketch & Tax Paid',
        'Road & Waterfront Demarcated',
        'NRI POA Registration Ready'
      ]
    }
  ],

  assuredPillars: [
    {
      num: '01',
      title: '30-Year Title & Deed Chain Audit',
      desc: 'Every Bhoomika Assured plot undergoes independent legal scrutiny across 30+ years of prior deeds, patta records, and heirship links.'
    },
    {
      num: '02',
      title: 'Nil Encumbrance & Lien Verification',
      desc: 'Verified EC certificates ensure zero undisclosed mortgages, court attachments, bank pledges, or third-party claims.'
    },
    {
      num: '03',
      title: 'Digital Survey & Physical Pillars',
      desc: 'Licensed surveyors cross-check village FMB sketches on-site so every cent on paper matches exact boundary stones on ground.'
    },
    {
      num: '04',
      title: 'Zoning, CRZ & Wetland Compliance',
      desc: 'We verify residential, commercial, agricultural, or tourism classification upfront—protecting your future building permit.'
    },
    {
      num: '05',
      title: 'Transparent Direct-Owner Pricing',
      desc: 'Zero inflated broker layering. Receive clear guidance on stamp duty, registration charges, and fair local circle rates.'
    },
    {
      num: '06',
      title: 'End-to-End NRI & POA Support',
      desc: 'Live drone video inspections, embassy-attested Power of Attorney coordination, and seamless mutation after registration.'
    }
  ],

  services: [
    {
      icon: 'search',
      title: 'Curated Land & Property Matchmaking',
      desc: 'Share your target district, cent/acre footprint, road frontage, and budget. Our specialists shortlist verified on-market and off-market parcels.'
    },
    {
      icon: 'shield',
      title: 'Legal Due Diligence & Title Desk',
      desc: 'Complete title investigation, EC extraction, revenue mutation, land-use conversion checks, and sale deed drafting by property advocates.'
    },
    {
      icon: 'compass',
      title: 'Escorted Site Visits & Drone Surveys',
      desc: 'Chauffeured physical site inspections across our regional hubs—or 4K live-streamed drone walkthroughs for outstation and NRI buyers.'
    },
    {
      icon: 'briefcase',
      title: 'Commercial & Virtual Space Advisory',
      desc: 'High-footfall highway frontage parcels, retail plazas, and flexible managed/virtual office spaces engineered for strong rental yield.'
    },
    {
      icon: 'trending',
      title: 'Sell or Co-Develop Your Land',
      desc: 'Landowners can list plots or partner with vetted developers for plotted layouts, gated villa enclaves, and commercial joint ventures.'
    },
    {
      icon: 'globe',
      title: 'NRI Asset & Portfolio Stewardship',
      desc: 'Dedicated India–UAE investor desk handling boundary fencing, tax renewals, tenant oversight, and strategic exit valuation.'
    }
  ],

  testimonials: [
    {
      quote: 'Living in Dubai, buying 14 cents in Kozhikode always felt risky until Bhoomika Landsale shared the full 30-year title dossier, FMB survey overlay, and live drone tour. Registration took one visit.',
      author: 'Arjun Menon',
      meta: 'NRI Investor · Bought BL-504 Plot, Kozhikode'
    },
    {
      quote: 'We needed highway-front commercial land with clear zoning and zero litigation. Their advisory team saved us months of due diligence and negotiated direct-to-owner terms cleanly.',
      author: 'Dr. Kavitha Nair',
      meta: 'Healthcare Director · Acquired Commercial Parcel, Malappuram'
    },
    {
      quote: 'From marking boundary stones to updating village land tax post-registration, Bhoomika’s Assured checklist gave our family total peace of mind for our retirement villa plot.',
      author: 'Raghavan & Meera Pillai',
      meta: 'Homeowners · Bought Courtyard Villa, Perinthalmanna'
    }
  ],

  faqs: [
    {
      q: 'What does the "Bhoomika Assured" seal guarantee on a land listing?',
      a: 'Properties carrying the Bhoomika Assured seal have cleared our 6-point verification protocol: 30-year title deed audit, Nil Encumbrance Certificate check, licensed digital boundary survey, verified zoning/conversion status, up-to-date land tax receipts, and transparent direct pricing.'
    },
    {
      q: 'How are land measurements calculated across Cents, Acres, and Sq. Ft.?',
      a: 'Across Kerala and South India, land is commonly traded in Cents and Acres: 1 Acre equals 100 Cents, and 1 Cent equals 435.6 Square Feet (or 40.47 Sq. Meters). You can toggle units globally using the switcher in our search dock or use the built-in Land Area Converter.'
    },
    {
      q: 'Can NRI buyers purchase or sell land remotely through Bhoomika Landsale?',
      a: 'Yes. Our dedicated NRI & Global Investor Desk conducts live HD drone site tours, compiles verified digital legal packs, coordinates Embassy-attested Power of Attorney (POA) execution in UAE/GCC or abroad, and manages post-sale mutation and tax filings.'
    },
    {
      q: 'How do I list my own land, villa, or commercial space for sale?',
      a: 'Use the "Sell / List Your Land" tab in our advisory section below. Submit your plot location, area in cents or acres, road frontage, and expected price. Our regional valuation surveyor will contact you within 24 hours for an on-site inspection.'
    },
    {
      q: 'Do you charge buyers upfront for site visits or legal checklists?',
      a: 'Initial shortlisting, advisory consultations, and escorted local site visits for verified inquiries are complimentary. Formal third-party advocate opinions or licensed contour surveys are quoted transparently upfront before initiation.'
    }
  ],

  videoTours: [
    {
      id: 'vt-1',
      code: 'BL-504',
      category: '4K Drone Plot Tour',
      duration: '03:45',
      title: 'Emerald Ridge Enclave — Full Aerial & Approach Road Tour',
      desc: 'Continuous drone flight showing the 8m tarred avenue, stone compound boundaries, surrounding residential neighborhood, and distance to NH Bypass.',
      poster: 'assets/images/hero-estate.jpg',
      youtubeUrl: '' // Paste your YouTube link or Video ID here, e.g. 'https://youtu.be/YOUR_VIDEO_ID'
    },
    {
      id: 'vt-2',
      code: 'BL-408',
      category: 'Villa Walkthrough',
      duration: '04:18',
      title: 'Courtyard Teak & Laterite Signature Villa — Twilight Tour',
      desc: 'Guided architectural walkthrough covering the open central courtyard, reflecting pool, natural stone elevation, and private garden landscaping.',
      poster: 'assets/images/prop-villa.jpg',
      youtubeUrl: ''
    },
    {
      id: 'vt-3',
      code: 'BL-341',
      category: 'Commercial Hub',
      duration: '02:55',
      title: 'Bypass Sovereign Commercial Frontage — Highway Traffic & Access',
      desc: 'Daytime inspection of the 110 ft highway frontage, dedicated parking bays, and corporate floor plate suitability along Thondayad Bypass.',
      poster: 'assets/images/prop-commercial.jpg',
      youtubeUrl: ''
    },
    {
      id: 'vt-4',
      code: 'GUIDE',
      category: 'Buyer Legal Guide',
      duration: '05:10',
      title: 'How Our 6-Point Bhoomika Assured Legal Verification Works',
      desc: 'Learn how our property advocates audit 30-year title deeds, Nil Encumbrance Certificates, and digital FMB survey sketches before listing.',
      poster: 'assets/images/prop-hospitality.jpg',
      youtubeUrl: ''
    }
  ]
};

