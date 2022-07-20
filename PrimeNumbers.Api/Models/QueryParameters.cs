namespace PrimeNumbers.Api.Models
{
    public class QueryParameters
    {
        private int _maxNumber = 100;
        private int _minNumber = 2;
        public int MaxNumber
        {
            get { return _maxNumber; }
            set { _maxNumber = Math.Min(value, _maxNumber); }
        }
        public int MinNumber
        {
            get { return _minNumber; }
            set { _minNumber = Math.Max(value, _minNumber); }
        }
    }
}
