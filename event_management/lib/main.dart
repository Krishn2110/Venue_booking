import 'package:flutter/material.dart';

void main() {
  runApp(const EventManagementApp());
}

class EventManagementApp extends StatelessWidget {
  const EventManagementApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'VENUE BOOKINGS',
      debugShowCheckedModeBanner: false,

      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.indigoAccent),
        useMaterial3: true,
        fontFamily: 'Roboto',
        scaffoldBackgroundColor: Colors.grey[50],
        appBarTheme: const AppBarTheme(
          backgroundColor: Colors.white,
          foregroundColor: Colors.black,
          centerTitle: true,
          elevation: 10,
        ),
      ),
      home: const MainNavigation(),
    );
  }
}

class MainNavigation extends StatefulWidget {
  const MainNavigation({super.key});

  @override
  State<MainNavigation> createState() => _MainNavigationState();
}

class _MainNavigationState extends State<MainNavigation> {
  int _selectedIndex = 0;

  final List<Widget> _pages = const [
    HomePage(),
    VenueBookingPage(),
    EquipmentManagementPage(),
    MyEventsPage(),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      
      body: _pages[_selectedIndex],
      bottomNavigationBar: NavigationBar(
        height: 70,
        backgroundColor: Colors.white,
        selectedIndex: _selectedIndex,
        onDestinationSelected: (int idx) {
          setState(() => _selectedIndex = idx);
        },
        destinations: const [
          NavigationDestination(icon: Icon(Icons.home_outlined), label: 'Home'),
          NavigationDestination(icon: Icon(Icons.event_available_outlined), label: 'Venue'),
          NavigationDestination(icon: Icon(Icons.shopping_cart_outlined), label: 'Equipment'),
          NavigationDestination(icon: Icon(Icons.list_alt_outlined), label: 'My Events'),
        ],
      ),
    );
  }
}

class HomePage extends StatelessWidget {
  const HomePage({super.key});
  static const double _demoBudget = 2000;
  final List<Map<String, dynamic>> _demoBookings = const [
    {
      'eventName': 'Team Meeting',
      'venue': 'City Center Conference Hall',
      'date': '2025-12-05',
      'price': 300 // example value
    },
    {
      'eventName': 'Wedding Party',
      'venue': 'Sunny Garden Venue',
      'date': '2025-11-29',
      'price': 250
    },
    {
      'eventName': 'Workshop',
      'venue': 'Uptown Rooftop',
      'date': '2025-12-16',
      'price': 500
    },
  ];

  double get _totalSpent => _demoBookings.fold(0, (sum, b) => sum + (b['price'] ?? 0));
  double get _balance => _demoBudget - _totalSpent;

  @override
  Widget build(BuildContext context) {
    // Mock analytics for demo (should be replaced with real data source in production)
    final int upcomingCount = _demoBookings.length;
    final int totalBookings = _demoBookings.length + 5;
    final String mostPopularVenue = _demoBookings.isNotEmpty ? _demoBookings[0]['venue'] : '-';
    return Scaffold(
      appBar: AppBar(title: const Text('VENUE BOOKINGS')),
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 10),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              // Budget tracker card
              Card(
                color: Colors.green[50],
                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(13)),
                child: Padding(
                  padding: const EdgeInsets.all(18.0),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text('Budget Tracker', style: Theme.of(context).textTheme.titleMedium),
                      const SizedBox(height: 7),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceAround,
                        children: [
                          Column(
                            children: [
                              const Text('Total Budget'),
                              Text('₹ ${_demoBudget.toStringAsFixed(0)}', style: const TextStyle(fontWeight: FontWeight.bold, color: Colors.teal)),
                            ],
                          ),
                          Column(
                            children: [
                              const Text('Spent'),
                              Text('₹ ${_totalSpent.toStringAsFixed(0)}', style: const TextStyle(fontWeight: FontWeight.bold, color: Colors.red)),
                            ],
                          ),
                          Column(
                            children: [
                              const Text('Balance'),
                              Text('₹ ${_balance.toStringAsFixed(0)}', style: TextStyle(fontWeight: FontWeight.bold, color: _balance >= 0 ? Colors.green : Colors.red)),
                            ],
                          ),
                        ],
                      ),
                    ],
                  ),
                ),
              ),
              const SizedBox(height: 20),
              Row(
                children: [
                  Icon(Icons.celebration, color: Colors.amber[700], size: 36),
                  const SizedBox(width: 3),
                  Text('Welcome Back', style: Theme.of(context).textTheme.titleLarge?.copyWith(fontWeight: FontWeight.w600)),
                  const Spacer(),
                  IconButton(
                    icon: const Icon(Icons.refresh, color: Colors.indigo, size: 26),
                    onPressed: () {},
                    tooltip: "Refresh your events"
                  ),
                ],
              ),
              const SizedBox(height: 18),
              Container(
                decoration: BoxDecoration(
                  color: Colors.indigo[50],
                  borderRadius: BorderRadius.circular(13)
                ),
                padding: const EdgeInsets.all(15),
                child: const Text('Book venues, rent/buy equipment, and manage your events here!',
                  textAlign: TextAlign.center,
                  style: TextStyle(fontSize: 17, fontWeight: FontWeight.w500)),
              ),
              const SizedBox(height: 26),
              Text('Your Current Bookings:', style: Theme.of(context).textTheme.titleMedium),
              const SizedBox(height: 7),
              Expanded(
                child: LayoutBuilder(
                  builder: (context, constraints) => _demoBookings.isEmpty
                      ? const Center(child: Text('No bookings yet.'))
                      : ListView.separated(
                          itemCount: _demoBookings.length,
                          separatorBuilder: (_, __) => const SizedBox(height: 10),
                          itemBuilder: (context, i) {
                            final b = _demoBookings[i];
                            return Card(
                              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                              elevation: 1.5,
                              child: ListTile(
                                contentPadding: const EdgeInsets.symmetric(horizontal: 10, vertical: 2),
                                leading: Icon(Icons.event_available_outlined, color: Colors.green[400], size: 32),
                                title: Text(b['eventName'], style: const TextStyle(fontWeight: FontWeight.bold)),
                                subtitle: Text('${b['venue']}\n${b['date']}', style: const TextStyle(height: 1.6)),
                                isThreeLine: true,
                                trailing: IconButton(
                                  icon: Icon(Icons.info_outline, color: Colors.indigoAccent[200], size: 27),
                                  onPressed: () {
                                    ScaffoldMessenger.of(context).showSnackBar(
                                      SnackBar(content: Text('Viewing details for "${b['eventName']}"')),
                                    );
                                  },
                                ),
                              ),
                            );
                          },
                        ),
                ),
              ),
              const SizedBox(height: 14),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  const Text('🎉 '),
                  AnimatedContainer(
                    duration: const Duration(milliseconds: 700),
                    height: 22,
                    width: 22,
                    decoration: BoxDecoration(
                      color: Colors.indigo[100],
                      borderRadius: BorderRadius.circular(900),
                    ),
                    child: const Icon(Icons.thumb_up_alt_outlined, size: 18, color: Colors.indigo),
                  ),
                  const SizedBox(width: 7),
                  const Text('Book and manage your next event!'),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class VenueBookingPage extends StatefulWidget {
  const VenueBookingPage({super.key});
  @override
  State<VenueBookingPage> createState() => _VenueBookingPageState();
}

class _VenueBookingPageState extends State<VenueBookingPage> {
  final List<String> _venueTypes = [
    'Conference Hall', 'Banquet Hall', 'Outdoor Garden', 'Meeting Room', 'Auditorium',
    'Rooftop Venue', 'Studio Space'];
  String? _selectedType;
  DateTime? _selectedDate;
  TimeOfDay? _selectedTime;
  int? _capacity;
  bool _showResults = false;
  int? _selectedVenueIdx;

  List<Map<String, dynamic>> _fakeVenues = [
    {'name': 'Downtown Conference Hall', 'capacity': 100, 'price': 300, 'location': 'City Center', 'pos': Offset(0.21, 0.65)},
    {'name': 'Sunny Garden Venue', 'capacity': 50, 'price': 250, 'location': 'West End', 'pos': Offset(0.75, 0.23)},
    {'name': 'Skyline Rooftop', 'capacity': 120, 'price': 500, 'location': 'Uptown', 'pos': Offset(0.64, 0.82)},
  ];

  Future<void> _pickDateTime() async {
    final date = await showDatePicker(
      context: context,
      initialDate: DateTime.now(),
      firstDate: DateTime.now(),
      lastDate: DateTime.now().add(const Duration(days: 365)),
    );
    if (date == null) return;
    final time = await showTimePicker(
      context: context,
      initialTime: TimeOfDay.now(),
    );
    if (time == null) return;
    setState(() {
      _selectedDate = date;
      _selectedTime = time;
    });
  }

  Widget _buildForm() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      mainAxisSize: MainAxisSize.min,
      children: [
        DropdownButtonFormField<String>(
          value: _selectedType,
          hint: const Text('Select Venue Type'),
          items: _venueTypes.map((e) => DropdownMenuItem(value: e, child: Text(e))).toList(),
          onChanged: (val) => setState(() => _selectedType = val),
        ),
        const SizedBox(height: 16),
        TextFormField(
          keyboardType: TextInputType.number,
          decoration: const InputDecoration(labelText: 'Capacity (number of people)'),
          onChanged: (val) => setState(() => _capacity = int.tryParse(val)),
        ),
        const SizedBox(height: 16),
        ListTile(
          contentPadding: EdgeInsets.zero,
          title: Text(_selectedDate == null
              ? 'Select Date & Time'
              : '${_selectedDate!.toLocal().toString().split(" ")[0]} - ${_selectedTime?.format(context) ?? ''}'),
          trailing: Icon(Icons.calendar_today_outlined),
          onTap: _pickDateTime,
        ),
        const SizedBox(height: 22),
        ElevatedButton(
          style: ElevatedButton.styleFrom(
              padding: const EdgeInsets.symmetric(vertical: 16),
              backgroundColor: Colors.indigoAccent),
          onPressed: (_selectedType != null && _capacity != null && _selectedDate != null && _selectedTime != null)
              ? () => setState(() => _showResults = true)
              : null,
          child: const Text('Search Venues', style: TextStyle(fontSize: 18)),
        )
      ],
    );
  }

  class _VenueMapBG extends StatelessWidget {
    const _VenueMapBG({super.key});
    @override
    Widget build(BuildContext context) {
      return CustomPaint(
        size: Size.infinite,
        painter: _MapBGPainter(),
      );
    }
  }

  class _MapBGPainter extends CustomPainter {
    @override
    void paint(Canvas canvas, Size size) {
      final paint = Paint()
        ..color = Colors.indigo[50]!
        ..style = PaintingStyle.fill;
      canvas.drawRect(Offset.zero & size, paint);

      paint.color = Colors.blueGrey[100]!;
      paint.strokeWidth = 1;
      paint.style = PaintingStyle.stroke;
      for (var i = 1; i < 6; i++) {
        final dx = size.width * (i / 6);
        canvas.drawLine(Offset(dx, 0), Offset(dx, size.height), paint);
      }
      for (var i = 1; i < 4; i++) {
        final dy = size.height * (i / 4);
        canvas.drawLine(Offset(0, dy), Offset(size.width, dy), paint);
      }
      paint.color = Colors.indigo[100]!;
      paint.strokeWidth = 3;
      canvas.drawRect(
        Offset.zero & size,
        paint,
      ); // Top border
    }
    @override
    bool shouldRepaint(_) => false;
  }

  Widget _buildDemoMap() {
    return LayoutBuilder(
      builder: (_, c) => SizedBox(
        height: 250,
        child: Stack(
          children: [
            const _VenueMapBG(),
            ...List.generate(_fakeVenues.length, (i) {
              final v = _fakeVenues[i];
              final Offset rel = v['pos'];
              return Positioned(
                left: rel.dx * c.maxWidth - 26,
                top: rel.dy * c.maxHeight - 32,
                child: GestureDetector(
                  onTap: () => setState(() => _selectedVenueIdx = i),
                  child: Column(
                    children: [
                      Icon(Icons.location_on,
                        size: 48,
                        color: _selectedVenueIdx == i ? Colors.teal : Colors.pinkAccent,
                        shadows: [Shadow(blurRadius: 5, color: Colors.black12)],
                      ),
                      Container(
                        padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 2),
                        decoration: BoxDecoration(
                          color: Colors.white,
                          borderRadius: BorderRadius.circular(11),
                          boxShadow: [BoxShadow(color: Colors.black12, blurRadius: 4, offset: Offset(0,2))],
                        ),
                        child: Text(
                          v['name'].toString().split(' ')[0],
                          style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w600),
                        ),
                      ),
                    ],
                  ),
                ),
              );
            }),
            if (_selectedVenueIdx == null)
              Center(
                child: Padding(
                  padding: const EdgeInsets.only(bottom: 35),
                  child: Text(
                    'Tap a pin to select a venue.',
                    style: TextStyle(color: Colors.indigo[300], fontWeight: FontWeight.bold, fontSize: 16, shadows: [Shadow(blurRadius: 2, color: Colors.white)]),
                    textAlign: TextAlign.center,
                  ),
                ),
              )
          ],
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Venue Booking')),
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(20.0),
          child: !_showResults
              ? SingleChildScrollView(
                  child: Column(
                    children: [
                      _buildForm(),
                      const SizedBox(height: 28),
                      Align(
                        alignment: Alignment.centerLeft,
                        child: Padding(
                          padding: const EdgeInsets.only(bottom: 7, left: 4),
                          child: Text('Demo Booking Map', style: Theme.of(context).textTheme.titleMedium),
                        ),
                      ),
                      _buildDemoMap(),
                      if (_selectedVenueIdx != null) ...[
                        const SizedBox(height: 18),
                        Card(
                          color: Colors.teal[50],
                          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
                          child: Padding(
                            padding: const EdgeInsets.all(12),
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Text(_fakeVenues[_selectedVenueIdx!]['name'], style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 17)),
                                Text(_fakeVenues[_selectedVenueIdx!]['location'], style: const TextStyle(color: Colors.indigo)),
                                Text('₹${_fakeVenues[_selectedVenueIdx!]['price']} | Capacity: ${_fakeVenues[_selectedVenueIdx!]['capacity']}'),
                                const SizedBox(height: 10),
                                ElevatedButton(
                                  onPressed: () => setState(() => _showResults = true),
                                  child: const Text('Book This Venue'),
                                ),
                              ],
                            ),
                          ),
                        ),
                      ],
                    ],
                  ),
                )
              : ListView(
                  children: [
                    Text('Available Venues', style: Theme.of(context).textTheme.titleMedium),
                    const SizedBox(height: 10),
                    ...List.generate(_fakeVenues.length, (i) {
                      final v = _fakeVenues[i];
                      return Column(
                        children: [
                          ListTile(
                            leading: Icon(Icons.location_city, color: Colors.indigoAccent[400]),
                            title: Text(v['name']),
                            subtitle: Text('${v['location']} • Capacity: ${v['capacity']}'),
                            trailing: SizedBox(
                              width: 130,
                              child: Row(
                                mainAxisAlignment: MainAxisAlignment.end,
                                children: [
                                  Flexible(
                                    child: Text(' ₹${v['price']}/day', style: TextStyle(fontWeight: FontWeight.bold), overflow: TextOverflow.ellipsis),
                                  ),
                                  const SizedBox(width: 4),
                                  Flexible(
                                    child: OutlinedButton(
                                      onPressed: () {},
                                      style: OutlinedButton.styleFrom(foregroundColor: Colors.indigoAccent, minimumSize: Size(35, 32), padding: EdgeInsets.symmetric(horizontal: 2)),
                                      child: const Text('Book', overflow: TextOverflow.ellipsis),
                                    ),
                                  ),
                                ],
                              ),
                            ),
                          ),
                          if (i != _fakeVenues.length-1) const Divider(),
                        ],
                      );
                    }),
                    const SizedBox(height: 16),
                    TextButton.icon(
                      icon: const Icon(Icons.arrow_back),
                      label: const Text('Back to Search'),
                      onPressed: () => setState(() => _showResults = false),
                    ),
                  ],
                ),
        ),
      ),
    );
  }
}

class EquipmentManagementPage extends StatefulWidget {
  const EquipmentManagementPage({super.key});
  @override
  State<EquipmentManagementPage> createState() => _EquipmentManagementPageState();
}

class _EquipmentManagementPageState extends State<EquipmentManagementPage> {
  final List<Map<String, dynamic>> _equipmentCatalog = [
    {'id': 1, 'name': 'Microphone', 'buy': 80, 'rent': 10, 'desc': 'Wireless mic for speeches/events', 'img': Icons.mic_none},
    {'id': 2, 'name': 'Projector', 'buy': 600, 'rent': 50, 'desc': 'Full HD, HDMI compatible', 'img': Icons.videocam},
    {'id': 3, 'name': 'Speaker System', 'buy': 400, 'rent': 40, 'desc': 'Dolby Surround', 'img': Icons.speaker},
    {'id': 4, 'name': 'Stage Lights', 'buy': 120, 'rent': 18, 'desc': 'Change colors/remotes', 'img': Icons.lightbulb},
    {'id': 5, 'name': 'Tables', 'buy': 25, 'rent': 3, 'desc': 'Folding, wood finish', 'img': Icons.table_bar},
    {'id': 6, 'name': 'Serving Dishes', 'buy': 15, 'rent': 2, 'desc': 'Ceramic, set of 3', 'img': Icons.restaurant},
    {'id': 7, 'name': 'Podium', 'buy': 50, 'rent': 8, 'desc': 'Acrylic/wood options', 'img': Icons.podcasts},
  ];
  final List<Map<String, dynamic>> _cart = [];

  void _addToCart(Map<String, dynamic> eq, {required bool rent}) {
    setState(() {
      _cart.add({ ...eq, 'mode': rent ? 'Rent' : 'Buy' });
    });
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(content: Text('${eq['name']} added to cart for ${rent ? 'Rent' : 'Purchase'}'), duration: const Duration(milliseconds: 1200)),
    );
  }

  void _showCart() {
    showModalBottomSheet(
      context: context,
      backgroundColor: Colors.white,
      shape: const RoundedRectangleBorder(
        borderRadius: BorderRadius.vertical(top: Radius.circular(22)),
      ),
      builder: (ctx) {
        if (_cart.isEmpty) {
          return const Padding(
            padding: EdgeInsets.all(32.0), child: Center(child: Text('Cart is empty')),
          );
        }
        return Padding(
          padding: const EdgeInsets.all(10.0),
          child: ListView.separated(
            shrinkWrap: true,
            itemCount: _cart.length,
            separatorBuilder: (_, __) => const Divider(),
            itemBuilder: (ctx, i) {
              final item = _cart[i];
              return ListTile(
                leading: Icon(item['img'], color: Colors.indigoAccent),
                title: Text(item['name']),
                subtitle: Text('${item['mode']}, 4${item[item['mode'].toLowerCase()]}'),
                trailing: IconButton(
                  icon: const Icon(Icons.delete_outlined, color: Colors.red),
                  onPressed: () => setState(() { _cart.removeAt(i); Navigator.maybePop(ctx); _showCart(); }),
                ),
              );
            },
          ),
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Event Equipment'),
        actions: [
          Stack(
            children: [
              IconButton(
                icon: const Icon(Icons.shopping_cart_outlined),
                onPressed: _showCart,
              ),
              if (_cart.isNotEmpty) ...[
                Positioned(
                  right: 5,
                  top: 4,
                  child: CircleAvatar(
                    backgroundColor: Colors.redAccent,
                    foregroundColor: Colors.white,
                    radius: 10,
                    child: Text('${_cart.length}', style: const TextStyle(fontSize: 12)),
                  ),
                ),
              ],
            ],
          )
        ],
      ),
      body: SafeArea(
        child: ListView.builder(
          padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 20),
          itemCount: _equipmentCatalog.length,
          itemBuilder: (ctx, idx) {
            final eq = _equipmentCatalog[idx];
            return Card(
              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(18)),
              color: Colors.white,
              elevation: 2,
              margin: const EdgeInsets.only(bottom: 11),
              child: Padding(
                padding: const EdgeInsets.all(10.0),
                child: ListTile(
                  contentPadding: EdgeInsets.zero,
                  leading: CircleAvatar(
                    backgroundColor: Colors.indigo[50],
                    child: Icon(eq['img'], color: Colors.indigoAccent, size: 28),
                    radius: 28,
                  ),
                  title: Text(eq['name'], style: const TextStyle(fontWeight: FontWeight.w600, fontSize: 17)),
                  subtitle: Padding(
                    padding: const EdgeInsets.symmetric(vertical: 20.0),
                    child: Text(eq['desc']),
                  ),
                  trailing: SizedBox(
                    width: 180, // max width for two buttons
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.end,
                      children: [
                        Expanded(
                          child: OutlinedButton(
                            onPressed: () { _addToCart(eq, rent: false); },
                            style: OutlinedButton.styleFrom(foregroundColor: Colors.indigo, side: const BorderSide(color: Colors.indigo), minimumSize: Size(20, 38)),
                            child: Text('Buy ( 4${eq['buy']})', overflow: TextOverflow.ellipsis),
                          ),
                        ),
                        const SizedBox(width: 8),
                        Expanded(
                          child: OutlinedButton(
                            onPressed: () { _addToCart(eq, rent: true); },
                            style: OutlinedButton.styleFrom(foregroundColor: Colors.teal, minimumSize: Size(20, 38)),
                            child: Text('Rent ( 4${eq['rent']}/day)', overflow: TextOverflow.ellipsis),
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              ),
            );
          },
        ),
      ),
    );
  }
}

class MyEventsPage extends StatelessWidget {
  const MyEventsPage({super.key});
  final List<Map<String, dynamic>> _myEvents = const [
    {
      'eventName': 'John’s Birthday',
      'eventType': 'birthday',
      'venue': 'City Center Conference Hall',
      'date': '2025-12-05',
      'equipment': 'Projector, 10 Chairs',
      'status': 'Upcoming',
    },
    {
      'eventName': 'Wedding Party',
      'eventType': 'wedding',
      'venue': 'Sunny Garden Venue',
      'date': '2025-11-29',
      'equipment': 'Tables, Flower Arrangement',
      'status': 'Upcoming',
    },
    {
      'eventName': 'Corporate Party',
      'eventType': 'party',
      'venue': 'Uptown Rooftop',
      'date': '2025-12-16',
      'equipment': 'Light Show, DJ Console',
      'status': 'Upcoming',
    },
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('My Events')),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: _myEvents.isEmpty
            ? const Center(child: Text('No events booked yet.'))
            : ListView.builder(
                itemCount: _myEvents.length,
                itemBuilder: (ctx, idx) {
                  final event = _myEvents[idx];
                  return InvitationCard(event: event);
                },
              ),
      ),
    );
  }
}

class InvitationCard extends StatelessWidget {
  final Map<String, dynamic> event;
  const InvitationCard({required this.event, super.key});

  @override
  Widget build(BuildContext context) {
    final String type = event['eventType'] ?? 'other';
    IconData icon;
    Color bg;
    String invitationText;
    switch (type) {
      case 'birthday':
        icon = Icons.cake_rounded;
        bg = Colors.pink[50]!;
        invitationText = 'You are invited to a Birthday Bash!';
        break;
      case 'wedding':
        icon = Icons.favorite;
        bg = Colors.blue[50]!;
        invitationText = 'Join us as we celebrate a Wedding!';
        break;
      case 'party':
        icon = Icons.celebration;
        bg = Colors.amber[50]!;
        invitationText = 'Let’s Party! You’re Invited!';
        break;
      default:
        icon = Icons.event;
        bg = Colors.grey[200]!;
        invitationText = 'Invitation to Event!';
    }

    return Card(
      color: bg,
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(20)),
      elevation: 2,
      margin: const EdgeInsets.only(bottom: 18),
      child: Padding(
        padding: const EdgeInsets.all(20),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              children: [
                Icon(icon, color: Colors.indigoAccent, size: 35),
                const SizedBox(width: 13),
                Expanded(
                  child: Text(
                    event['eventName'],
                    style: const TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
                  ),
                ),
                Chip(
                  label: Text(event['status'], style: const TextStyle(color: Colors.white)),
                  backgroundColor: event['status'] == 'Upcoming' ? Colors.indigoAccent[400] : Colors.grey,
                ),
              ],
            ),
            const SizedBox(height: 8),
            Text(invitationText, style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w500)),
            const SizedBox(height: 8),
            Text('Venue: ${event['venue']}'),
            Text('Date: ${event['date']}'),
            Text('Equipment: ${event['equipment']}'),
            const SizedBox(height: 10),
            // Simple guest invitation system (demo)
            Row(
              children: [
                const Icon(Icons.people, color: Colors.indigoAccent),
                const SizedBox(width: 9),
                const Text('Invite Guests:'),
                const SizedBox(width: 13),
                OutlinedButton.icon(
                  icon: const Icon(Icons.email_outlined),
                  label: const Text('Send Invite'),
                  onPressed: () {
                    ScaffoldMessenger.of(context).showSnackBar(
                      const SnackBar(content: Text('Invitation sent (demo)!'), duration: Duration(seconds: 1)),
                    );
                  },
                )
              ],
            ),
          ],
        ),
      ),
    );
  }
}

class _AnalyticsCard extends StatelessWidget {
  final String title;
  final String value;
  final IconData icon;
  final Color color;
  final TextStyle? valueStyle;

  const _AnalyticsCard({
    required this.title,
    required this.value,
    required this.icon,
    required this.color,
    this.valueStyle,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 200,
      margin: const EdgeInsets.only(right: 10),
      decoration: BoxDecoration(
        color: color.withOpacity(0.1),
        borderRadius: BorderRadius.circular(15),
      ),
      child: Padding(
        padding: const EdgeInsets.all(15.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Icon(icon, color: color, size: 30),
            const SizedBox(height: 10),
            Text(title, style: Theme.of(context).textTheme.titleSmall),
            const SizedBox(height: 5),
            Text(value, style: valueStyle ?? Theme.of(context).textTheme.titleLarge),
          ],
        ),
      ),
    );
  }
}
