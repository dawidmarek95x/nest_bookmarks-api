import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBookmarkDto, EditBookmarkDto } from './dto';

@Injectable()
export class BookmarkService {
  constructor(private prisma: PrismaService) {}

  createBookmark(userId: number, dto: CreateBookmarkDto) {
    return;
  }

  getBookmarks(userId: number) {
    return;
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
