
import { ChessboardPrinting } from './printChessboard';

describe('ChessboardPrinting', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be print "" rows', () => {
    const expectedStr = "";
    const result = ChessboardPrinting.printChessboard(-1);
    expect(result).toEqual(expectedStr);
  });
  it('should be print "" rows', () => {
    const expectedStr = "";
    const result = ChessboardPrinting.printChessboard(0);
    expect(result).toEqual(expectedStr);
  });
  it('should be print 1 rows', () => {
    const expectedStr = "x";
    const result = ChessboardPrinting.printChessboard(1);
    expect(result).toEqual(expectedStr);
  });

  it('should be print 2 rows', () => {
    const expectedStr = "xo\nox";
    const result = ChessboardPrinting.printChessboard(2);
    expect(result).toEqual(expectedStr);
  });

  it('should be print 3 rows', () => {
    const expectedStr = "xox\noxo\nxox";
    const result = ChessboardPrinting.printChessboard(3);
    expect(result).toEqual(expectedStr);
  });

  it('should be print "" rows', () => {
    const expectedStr = "";
    const result = ChessboardPrinting.printChessboardSquared(-1);
    expect(result).toEqual(expectedStr);
  });
  it('should be print "" rows', () => {
    const expectedStr = "";
    const result = ChessboardPrinting.printChessboardSquared(0);
    expect(result).toEqual(expectedStr);
  });
  it('should be print 1 rows', () => {
    const expectedStr = "x";
    const result = ChessboardPrinting.printChessboardSquared(1);
    expect(result).toEqual(expectedStr);
  });

  it('should be print 2 rows', () => {
    const expectedStr = "xoxo\noxox\nxoxo\noxox";
    const result = ChessboardPrinting.printChessboardSquared(2);
    expect(result).toEqual(expectedStr);
  });

  it('should be print 3 rows', () => {
    const expectedStr = "xoxoxoxox\noxoxoxoxo\nxoxoxoxox\noxoxoxoxo\nxoxoxoxox\noxoxoxoxo\nxoxoxoxox\noxoxoxoxo\nxoxoxoxox";
    const result = ChessboardPrinting.printChessboardSquared(3);
    expect(result).toEqual(expectedStr);
  });
});
