"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentsController = void 0;
const common_1 = require("@nestjs/common");
const components_service_1 = require("./components.service");
let ComponentsController = class ComponentsController {
    constructor(componentsService) {
        this.componentsService = componentsService;
    }
    findAll() {
        return this.componentsService.findAll();
    }
    findCpus() {
        return this.componentsService.findByType('cpu');
    }
    findGpus() {
        return this.componentsService.findByType('gpu');
    }
    findRam() {
        return this.componentsService.findByType('ram');
    }
    findMotherboards() {
        return this.componentsService.findByType('motherboard');
    }
    findStorage() {
        return this.componentsService.findByType('storage');
    }
    findCases() {
        return this.componentsService.findByType('case');
    }
    findCooling() {
        return this.componentsService.findByType('cooling');
    }
    findPsus() {
        return this.componentsService.findByType('psu');
    }
};
exports.ComponentsController = ComponentsController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ComponentsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('cpu'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ComponentsController.prototype, "findCpus", null);
__decorate([
    (0, common_1.Get)('gpu'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ComponentsController.prototype, "findGpus", null);
__decorate([
    (0, common_1.Get)('ram'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ComponentsController.prototype, "findRam", null);
__decorate([
    (0, common_1.Get)('motherboard'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ComponentsController.prototype, "findMotherboards", null);
__decorate([
    (0, common_1.Get)('storage'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ComponentsController.prototype, "findStorage", null);
__decorate([
    (0, common_1.Get)('case'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ComponentsController.prototype, "findCases", null);
__decorate([
    (0, common_1.Get)('cooling'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ComponentsController.prototype, "findCooling", null);
__decorate([
    (0, common_1.Get)('psu'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ComponentsController.prototype, "findPsus", null);
exports.ComponentsController = ComponentsController = __decorate([
    (0, common_1.Controller)('components'),
    __metadata("design:paramtypes", [components_service_1.ComponentsService])
], ComponentsController);
//# sourceMappingURL=components.controller.js.map