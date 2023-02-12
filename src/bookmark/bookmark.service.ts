import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBookmarkDto, EditBookmarkDto } from './dto';

@Injectable()
export class BookmarkService {
  constructor(private prisma: PrismaService) {}

  createBookmark(userId: number, dto: CreateBookmarkDto) {
    const bookmark = this.prisma.bookmark.create({
      data: {
        userId,
        ...dto,
      },
    });

    return bookmark;
  }

  getBookmarks(userId: number) {
    return this.prisma.bookmark.findMany({
      where: {
        userId,
      } as Prisma.BookmarkWhereInput,
    });
  }

  getBookmarkById(userId: number, bookmarkId: number) {
    return;
  }

  editBookmarkById(userId: number, bookmarkId: number, dto: EditBookmarkDto) {
    return;
  }

  deleteBookmarkById(userId: number, bookmarkId: number) {
    return;
  }
}
