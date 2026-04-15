import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Component } from './src/components/entities/component.entity';

const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: [Component],
  synchronize: true,
  ssl: process.env.NODE_ENV === 'production'
    ? { rejectUnauthorized: false }
    : false,
});

const components = [
  { name: 'Ryzen 5 7600X', type: 'cpu', brand: 'AMD', price: 229.99, specs: { cores: 6, threads: 12, baseClock: '4.7GHz', boostClock: '5.3GHz', tdp: '105W', socket: 'AM5' } },
  { name: 'Ryzen 7 7700X', type: 'cpu', brand: 'AMD', price: 299.99, specs: { cores: 8, threads: 16, baseClock: '4.5GHz', boostClock: '5.4GHz', tdp: '105W', socket: 'AM5' } },
  { name: 'Ryzen 9 7950X', type: 'cpu', brand: 'AMD', price: 549.99, specs: { cores: 16, threads: 32, baseClock: '4.5GHz', boostClock: '5.7GHz', tdp: '170W', socket: 'AM5' } },
  { name: 'Core i5-13600K', type: 'cpu', brand: 'Intel', price: 249.99, specs: { cores: 14, threads: 20, baseClock: '3.5GHz', boostClock: '5.1GHz', tdp: '125W', socket: 'LGA1700' } },
  { name: 'Core i7-13700K', type: 'cpu', brand: 'Intel', price: 349.99, specs: { cores: 16, threads: 24, baseClock: '3.4GHz', boostClock: '5.4GHz', tdp: '125W', socket: 'LGA1700' } },
  { name: 'Core i9-13900K', type: 'cpu', brand: 'Intel', price: 549.99, specs: { cores: 24, threads: 32, baseClock: '3.0GHz', boostClock: '5.8GHz', tdp: '125W', socket: 'LGA1700' } },

  { name: 'RX 6700 XT', type: 'gpu', brand: 'AMD', price: 329.99, specs: { vram: '12GB GDDR6', coreClock: '2321MHz', boostClock: '2581MHz', tdp: '230W', ports: 'HDMI 2.1, 3x DP 1.4' } },
  { name: 'RX 7800 XT', type: 'gpu', brand: 'AMD', price: 449.99, specs: { vram: '16GB GDDR6', coreClock: '1295MHz', boostClock: '2430MHz', tdp: '263W', ports: 'HDMI 2.1, 3x DP 2.1' } },
  { name: 'RX 7900 XTX', type: 'gpu', brand: 'AMD', price: 849.99, specs: { vram: '24GB GDDR6', coreClock: '1900MHz', boostClock: '2500MHz', tdp: '355W', ports: 'HDMI 2.1, 2x DP 2.1' } },
  { name: 'RTX 4060', type: 'gpu', brand: 'NVIDIA', price: 299.99, specs: { vram: '8GB GDDR6', coreClock: '1830MHz', boostClock: '2460MHz', tdp: '115W', ports: 'HDMI 2.1, 3x DP 1.4a' } },
  { name: 'RTX 4070', type: 'gpu', brand: 'NVIDIA', price: 549.99, specs: { vram: '12GB GDDR6X', coreClock: '1920MHz', boostClock: '2475MHz', tdp: '200W', ports: 'HDMI 2.1, 3x DP 1.4a' } },
  { name: 'RTX 4080 Super', type: 'gpu', brand: 'NVIDIA', price: 949.99, specs: { vram: '16GB GDDR6X', coreClock: '2295MHz', boostClock: '2550MHz', tdp: '320W', ports: 'HDMI 2.1, 3x DP 1.4a' } },
  { name: 'RTX 4090', type: 'gpu', brand: 'NVIDIA', price: 1549.99, specs: { vram: '24GB GDDR6X', coreClock: '2235MHz', boostClock: '2520MHz', tdp: '450W', ports: 'HDMI 2.1, 3x DP 1.4a' } },

  { name: 'Vengeance 16GB DDR5-5600', type: 'ram', brand: 'Corsair', price: 59.99, specs: { capacity: '16GB (2x8GB)', speed: 'DDR5-5600', cas: 'CL36', voltage: '1.25V' } },
  { name: 'Vengeance 32GB DDR5-5600', type: 'ram', brand: 'Corsair', price: 99.99, specs: { capacity: '32GB (2x16GB)', speed: 'DDR5-5600', cas: 'CL36', voltage: '1.25V' } },
  { name: 'Trident Z5 32GB DDR5-6000', type: 'ram', brand: 'G.Skill', price: 119.99, specs: { capacity: '32GB (2x16GB)', speed: 'DDR5-6000', cas: 'CL30', voltage: '1.35V' } },
  { name: 'Trident Z5 64GB DDR5-6000', type: 'ram', brand: 'G.Skill', price: 219.99, specs: { capacity: '64GB (2x32GB)', speed: 'DDR5-6000', cas: 'CL30', voltage: '1.35V' } },

  { name: 'MAG X670E Tomahawk', type: 'motherboard', brand: 'MSI', price: 289.99, specs: { socket: 'AM5', chipset: 'X670E', formFactor: 'ATX', memorySlots: 4, maxMemory: '128GB', pcie: 'PCIe 5.0' } },
  { name: 'ROG Strix B650E-F', type: 'motherboard', brand: 'ASUS', price: 249.99, specs: { socket: 'AM5', chipset: 'B650E', formFactor: 'ATX', memorySlots: 4, maxMemory: '128GB', pcie: 'PCIe 5.0' } },
  { name: 'Z790 Aorus Elite AX', type: 'motherboard', brand: 'Gigabyte', price: 269.99, specs: { socket: 'LGA1700', chipset: 'Z790', formFactor: 'ATX', memorySlots: 4, maxMemory: '128GB', pcie: 'PCIe 5.0' } },
  { name: 'ROG Maximus Z790 Hero', type: 'motherboard', brand: 'ASUS', price: 549.99, specs: { socket: 'LGA1700', chipset: 'Z790', formFactor: 'ATX', memorySlots: 4, maxMemory: '192GB', pcie: 'PCIe 5.0' } },

  { name: '970 EVO Plus 1TB', type: 'storage', brand: 'Samsung', price: 79.99, specs: { capacity: '1TB', type: 'NVMe M.2', interface: 'PCIe 3.0 x4', readSpeed: '3500MB/s', writeSpeed: '3300MB/s' } },
  { name: '990 Pro 1TB', type: 'storage', brand: 'Samsung', price: 99.99, specs: { capacity: '1TB', type: 'NVMe M.2', interface: 'PCIe 4.0 x4', readSpeed: '7450MB/s', writeSpeed: '6900MB/s' } },
  { name: '990 Pro 2TB', type: 'storage', brand: 'Samsung', price: 179.99, specs: { capacity: '2TB', type: 'NVMe M.2', interface: 'PCIe 4.0 x4', readSpeed: '7450MB/s', writeSpeed: '6900MB/s' } },
  { name: 'SN850X 1TB', type: 'storage', brand: 'WD Black', price: 89.99, specs: { capacity: '1TB', type: 'NVMe M.2', interface: 'PCIe 4.0 x4', readSpeed: '7300MB/s', writeSpeed: '6600MB/s' } },
  { name: 'SN850X 2TB', type: 'storage', brand: 'WD Black', price: 159.99, specs: { capacity: '2TB', type: 'NVMe M.2', interface: 'PCIe 4.0 x4', readSpeed: '7300MB/s', writeSpeed: '6600MB/s' } },

  { name: 'H510 Flow', type: 'case', brand: 'NZXT', price: 89.99, specs: { formFactor: 'Mid Tower', supportedBoards: 'ATX, mATX, ITX', driveBays: '2x 3.5", 2x 2.5"', maxGpuLength: '381mm', maxCpuCoolerHeight: '165mm' } },
  { name: 'Meshify 2', type: 'case', brand: 'Fractal Design', price: 139.99, specs: { formFactor: 'Mid Tower', supportedBoards: 'E-ATX, ATX, mATX, ITX', driveBays: '2x 3.5", 2x 2.5"', maxGpuLength: '491mm', maxCpuCoolerHeight: '185mm' } },
  { name: 'O11 Dynamic EVO', type: 'case', brand: 'Lian Li', price: 169.99, specs: { formFactor: 'Mid Tower', supportedBoards: 'E-ATX, ATX, mATX', driveBays: '6x 2.5", 2x 3.5"', maxGpuLength: '420mm', maxCpuCoolerHeight: '167mm' } },
  { name: 'Torrent', type: 'case', brand: 'Fractal Design', price: 189.99, specs: { formFactor: 'Mid Tower', supportedBoards: 'E-ATX, ATX, mATX, ITX', driveBays: '2x 3.5", 2x 2.5"', maxGpuLength: '461mm', maxCpuCoolerHeight: '188mm' } },

  { name: 'Hyper 212 Black', type: 'cooling', brand: 'Cooler Master', price: 39.99, specs: { type: 'Air', fanSize: '120mm', tdp: '150W', height: '158.8mm', sockets: 'LGA1700, AM5, AM4' } },
  { name: 'NH-D15', type: 'cooling', brand: 'Noctua', price: 99.99, specs: { type: 'Air', fanSize: '2x 140mm', tdp: '250W', height: '165mm', sockets: 'LGA1700, AM5, AM4' } },
  { name: 'Kraken 240', type: 'cooling', brand: 'NZXT', price: 99.99, specs: { type: 'AIO Liquid', radiator: '240mm', fans: '2x 120mm', tdp: '250W', sockets: 'LGA1700, AM5, AM4' } },
  { name: 'Kraken 360', type: 'cooling', brand: 'NZXT', price: 149.99, specs: { type: 'AIO Liquid', radiator: '360mm', fans: '3x 120mm', tdp: '300W', sockets: 'LGA1700, AM5, AM4' } },
  { name: 'iCUE H150i Elite', type: 'cooling', brand: 'Corsair', price: 179.99, specs: { type: 'AIO Liquid', radiator: '360mm', fans: '3x 120mm', tdp: '350W', sockets: 'LGA1700, AM5, AM4' } },

  { name: 'Shift 750W Gold', type: 'psu', brand: 'Corsair', price: 109.99, specs: { wattage: '750W', efficiency: '80+ Gold', modular: 'Fully Modular', formFactor: 'ATX' } },
  { name: 'Shift 850W Gold', type: 'psu', brand: 'Corsair', price: 129.99, specs: { wattage: '850W', efficiency: '80+ Gold', modular: 'Fully Modular', formFactor: 'ATX' } },
  { name: 'SuperNOVA 850W Platinum', type: 'psu', brand: 'EVGA', price: 149.99, specs: { wattage: '850W', efficiency: '80+ Platinum', modular: 'Fully Modular', formFactor: 'ATX' } },
  { name: 'SuperNOVA 1000W Platinum', type: 'psu', brand: 'EVGA', price: 189.99, specs: { wattage: '1000W', efficiency: '80+ Platinum', modular: 'Fully Modular', formFactor: 'ATX' } },
  { name: 'Toughpower GF3 1000W Gold', type: 'psu', brand: 'Thermaltake', price: 159.99, specs: { wattage: '1000W', efficiency: '80+ Gold', modular: 'Fully Modular', formFactor: 'ATX' } },
];

async function seed() {
  await AppDataSource.initialize();
  const repo = AppDataSource.getRepository(Component);

  const existing = await repo.count();
  if (existing > 0) {
    console.log(`Database already has ${existing} components. Skipping seed.`);
    await AppDataSource.destroy();
    return;
  }

  for (const data of components) {
    const component = repo.create(data);
    await repo.save(component);
  }

  console.log(`Seeded ${components.length} components successfully.`);
  await AppDataSource.destroy();
}

seed().catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});