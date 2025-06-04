"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// 1
const prisma_1 = require("../generated/prisma");
const extension_accelerate_1 = require("@prisma/extension-accelerate");
// 2
const prisma = new prisma_1.PrismaClient().$extends((0, extension_accelerate_1.withAccelerate)());
// 3
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const users = yield prisma.user.findUnique({
            where: {
                id: 3,
            },
            include: {
                posts: true,
            },
        });
        console.log("Created user:", users === null || users === void 0 ? void 0 : users.posts);
    });
}
// 4
main()
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
}))
    .catch((e) => __awaiter(void 0, void 0, void 0, function* () {
    console.error(e);
    // 5
    yield prisma.$disconnect();
    process.exit(1);
}));
