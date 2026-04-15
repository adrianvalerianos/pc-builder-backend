"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuildsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const build_entity_1 = require("./entities/build.entity");
const builds_controller_1 = require("./builds.controller");
const builds_service_1 = require("./builds.service");
const components_module_1 = require("../components/components.module");
let BuildsModule = class BuildsModule {
};
exports.BuildsModule = BuildsModule;
exports.BuildsModule = BuildsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([build_entity_1.Build]), components_module_1.ComponentsModule],
        controllers: [builds_controller_1.BuildsController],
        providers: [builds_service_1.BuildsService],
    })
], BuildsModule);
//# sourceMappingURL=builds.module.js.map